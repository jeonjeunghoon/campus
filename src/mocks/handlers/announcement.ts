import { HttpResponse, http } from 'msw';

import { REQUEST_URL } from 'constants/apis/url';
import { AnnouncementList } from 'mocks/data/announcement';

export const announcementHandlers = [
  // 공지 목록 조회 (페이지네이션)
  http.get(REQUEST_URL.ANNOUNCEMENT_LIST_WITH_PAGINATION, () => {
    return HttpResponse.json(AnnouncementList, {
      status: 200,
    });
  }),

  // 공지 목록 조회 (무한스크롤)
  http.get(REQUEST_URL.ANNOUNCEMENT_LIST_WITH_CURSOR, () => {
    return HttpResponse.json(AnnouncementList, {
      status: 200,
    });
  }),
];
