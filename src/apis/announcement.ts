import { REQUEST_URL } from 'constants/url';
import {
  AnnouncementAddRequest,
  AnnouncementEditRequest,
  AnnouncementListOffsetResponse,
} from 'type/announcement';

import { https } from './fetch';

export const getAnnouncementList = (url: string): Promise<AnnouncementListOffsetResponse> =>
  https.get(url);

export const getAnnouncement = (announcementId: number) =>
  https.get(`${REQUEST_URL.announcements}/${announcementId}`);

export const editAnnouncement = async (announcementId: number, data: AnnouncementEditRequest) =>
  await https.patch(`${REQUEST_URL.announcements}/${announcementId}`, data);

export const postAnnouncement = async (data: AnnouncementAddRequest): Promise<string> => {
  const response = await https.post(`${REQUEST_URL.announcements}`, data);
  const location = response.headers['location'];

  return location;
};

export const deleteAnnouncement = (announcementId: number) =>
  https.delete(`${REQUEST_URL.announcements}/${announcementId}`);
