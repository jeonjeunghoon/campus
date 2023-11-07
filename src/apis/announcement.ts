import { REQUEST_URL } from 'constants/url';
import { AnnouncementAddRequest, AnnouncementListResponse } from 'type/announcement';

import { https } from './fetch';

export const getAnnouncementList = (url: string): Promise<AnnouncementListResponse> =>
  https.get(url);

export const getAnnouncement = (announcementId: number) =>
  https.get(`${REQUEST_URL.announcements}/${announcementId}`);

export const postAnnouncement = async (data: AnnouncementAddRequest): Promise<string> => {
  const response = await https.post(`${REQUEST_URL.announcements}`, data);
  const location = response.headers['location'];

  return location;
};

export const deleteAnnouncement = (announcementId: number) =>
  https.delete(`${REQUEST_URL.announcements}/${announcementId}`);
