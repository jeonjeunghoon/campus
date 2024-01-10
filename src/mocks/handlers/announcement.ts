import { HttpResponse, delay, http } from 'msw';

import { REQUEST_URL } from 'constants/url';
import {
  announcementContent,
  announcementList,
  authorization,
  newAnnouncementContent,
} from 'mocks/data/announcement';
import { GetAnnouncementListWithPaginationResponse } from 'type/announcement';

export const announcementHandlers = [
  // 공지 목록 조회 (페이지네이션)
  http.get(`${REQUEST_URL.announcements}/offset`, async ({ request }) => {
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    const { searchParams } = new URL(request.url);
    const pageNum = searchParams.get('page') ?? 0;
    const sizePerPage = searchParams.get('size') ?? 10;

    const page = Number(pageNum);
    const size = Number(sizePerPage);
    const announcements = announcementList.slice(page * size, (page + 1) * size);
    const totalElements = announcementList.length;
    const totalPages = Math.ceil(totalElements / size);

    await delay(1500);

    return HttpResponse.json<GetAnnouncementListWithPaginationResponse>(
      { announcements, page, size, totalElements, totalPages },
      {
        status: 200,
      },
    );
  }),

  // 공지 목록 조회 (무한스크롤)
  // http.get(`${REQUEST_URL.announcements}/cursor`, async ({ request }) => {
  //   const clientAuthorization = request.headers.get('Authorization');

  //   if (authorization !== clientAuthorization) return HttpResponse.error();

  //   const { searchParams } = new URL(request.url);
  //   const id = searchParams.get('id');
  //   const size = searchParams.get('size');

  //   await delay(1500);

  //   return HttpResponse.json(announcementListPagination, {
  //     status: 200,
  //   });
  // }),

  // 공지 조회
  http.get(`${REQUEST_URL.announcements}/:announcementId`, async ({ params, request }) => {
    const { announcementId } = params;
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    await delay(1500);

    if (announcementId === '20')
      return HttpResponse.json(newAnnouncementContent, {
        status: 200,
      });

    return HttpResponse.json(announcementContent, {
      status: 200,
    });
  }),

  // 공지 게시
  http.post(REQUEST_URL.announcements, async ({ request }) => {
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    await delay(1500);

    return new HttpResponse(null, {
      status: 201,
      headers: {
        Location: '/api/announcements/20',
      },
    });
  }),

  // 공지 수정
  http.patch(`${REQUEST_URL.announcements}/:announcementId`, async ({ request }) => {
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    await delay(1500);

    return new HttpResponse(null, {
      status: 200,
    });
  }),

  // 공지 삭제
  http.delete(`${REQUEST_URL.announcements}/:announcementId`, async ({ request }) => {
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    await delay(1500);

    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
