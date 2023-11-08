import { HttpResponse, http } from 'msw';

import { REQUEST_URL } from 'constants/url';
import { announcement, announcementListOffset, newAnnouncement } from 'mocks/data/announcement';

export const announcementHandlers = [
  // 공지 목록 조회 (페이지네이션)
  http.get(`${REQUEST_URL.announcements}/offset`, () => {
    return HttpResponse.json(announcementListOffset, {
      status: 200,
    });
  }),

  // 공지 목록 조회 (무한스크롤)
  http.get(`${REQUEST_URL.announcements}/cursor`, () => {
    return HttpResponse.json(announcementListOffset, {
      status: 200,
    });
  }),

  // 공지 조회
  http.get(`${REQUEST_URL.announcements}/:announcementId`, ({ params }) => {
    const { announcementId } = params;

    if (announcementId === '20')
      return HttpResponse.json(newAnnouncement, {
        status: 200,
      });

    return HttpResponse.json(announcement, {
      status: 200,
    });
  }),

  // 공지 게시
  http.post(REQUEST_URL.announcements, () => {
    return new HttpResponse(null, {
      status: 201,
      headers: {
        Location: '/api/announcements/20',
      },
    });
  }),

  // 공지 수정
  http.patch(`${REQUEST_URL.announcements}/:announcementId`, () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),

  // 공지 삭제
  http.delete(`${REQUEST_URL.announcements}/:announcementId`, () => {
    return new HttpResponse(null, {
      status: 204,
    });
  }),
];
