import { HttpResponse, http } from 'msw';

import { REQUEST_URL } from 'constants/url';
import { authorization } from 'mocks/data/attendance';

export const attendanceHandlers = [
  // 출석
  http.post(REQUEST_URL.attendances, ({ request }) => {
    const clientAuthorization = request.headers.get('Authorization');

    if (authorization !== clientAuthorization) return HttpResponse.error();

    return HttpResponse.json(
      {
        status: 'attendance',
      },
      { status: 200 },
    );
  }),
];
