import { REQUEST_URL } from 'constants/url';
import {
  AnnouncementAddRequest,
  AnnouncementEditRequest,
  AnnouncementListOffsetResponse,
  AnnouncementResponse,
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

export const getAnnouncementList = async (): Promise<AnnouncementListOffsetResponse> => {
  const response = await http.get(`${REQUEST_URL.announcements}/offset`, generateOptions());

  return response.data;
};

export const getAnnouncement = async (announcementId: number): Promise<AnnouncementResponse> => {
  const response = await http.get(
    `${REQUEST_URL.announcements}/${announcementId}`,
    generateOptions(),
  );

  return response.data;
};

export const editAnnouncement = async (announcementId: number, data: AnnouncementEditRequest) => {
  return await http.patch(
    `${REQUEST_URL.announcements}/${announcementId}`,
    JSON.stringify(data),
    generateOptions(),
  );
};

export const addAnnouncement = async (data: AnnouncementAddRequest) => {
  return await http.post(`${REQUEST_URL.announcements}`, JSON.stringify(data), generateOptions());
};

export const deleteAnnouncement = async (announcementId: number) => {
  return await http.delete(`${REQUEST_URL.announcements}/${announcementId}`, generateOptions());
};
