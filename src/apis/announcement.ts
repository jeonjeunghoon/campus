import { REQUEST_URL } from 'constants/url';
import {
  AnnouncementContentAddRequest,
  AnnouncementContentEditRequest,
  AnnouncementListWithPaginationRequest,
  AnnouncementListWithPaginationResponse,
  AnnouncementContentResponse,
} from 'type/announcement';

import { http } from './fetch';

const generateOptions = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('authAnnouncement'),
    },
  };
};

export const getAnnouncementListWithPagination = async ({
  page,
  size,
}: AnnouncementListWithPaginationRequest): Promise<AnnouncementListWithPaginationResponse> => {
  const response = await http.get(
    `${REQUEST_URL.announcements}/offset?page=${page}&size=${size}`,
    generateOptions(),
  );

  return response.data;
};

export const getAnnouncementContent = async (
  announcementId: number,
): Promise<AnnouncementContentResponse> => {
  const response = await http.get(
    `${REQUEST_URL.announcements}/${announcementId}`,
    generateOptions(),
  );

  return response.data;
};

export const editAnnouncementContent = async (
  announcementId: number,
  data: AnnouncementContentEditRequest,
) => {
  return await http.patch(
    `${REQUEST_URL.announcements}/${announcementId}`,
    JSON.stringify(data),
    generateOptions(),
  );
};

export const addAnnouncementContent = async (data: AnnouncementContentAddRequest) => {
  return await http.post(`${REQUEST_URL.announcements}`, JSON.stringify(data), generateOptions());
};

export const deleteAnnouncementContent = async (announcementId: number) => {
  return await http.delete(`${REQUEST_URL.announcements}/${announcementId}`, generateOptions());
};
