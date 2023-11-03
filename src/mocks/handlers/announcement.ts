import { HttpResponse, http } from 'msw';

import { REQUEST_URL } from 'constants/url';
import { announcement, announcementList } from 'mocks/data/announcement';

export const announcementHandlers = [
  // 공지 목록 조회 (페이지네이션)
  http.get(`${REQUEST_URL.announcements}/pagination`, () => {
    return HttpResponse.json(announcementList, {
      status: 200,
    });
  }),

  // 공지 목록 조회 (무한스크롤)
  http.get(`${REQUEST_URL.announcements}/cursor`, () => {
    return HttpResponse.json(announcementList, {
      status: 200,
    });
  }),

  // 공지 조회
  http.get(`${REQUEST_URL.announcements}/:announcementId`, () => {
    return HttpResponse.json(announcement, {
      status: 200,
    });
  }),

  // 공지 수정
  http.patch(`${REQUEST_URL.announcements}/:announcementId`, () => {
    return new HttpResponse();
  }),

  // 공지 삭제
  http.delete(`${REQUEST_URL.announcements}/:announcementId`, () => {
    return new HttpResponse();
  }),
];
