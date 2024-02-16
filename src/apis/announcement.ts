import {
  AddAnnouncementContentRequest,
  EditAnnouncementContentRequest,
  GetAnnouncementListWithPaginationRequest,
  GetAnnouncementListWithPaginationResponse,
  GetAnnouncementContentResponse,
  GetAnnouncementContentRequest,
  DeleteAnnouncementContentRequest,
  GetAnnouncementListWithInfiniteScrollRequest,
} from 'type/announcement';

import { http } from './fetch';

const ANNOUNCEMENTS_URL = 'announcements';

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
}: GetAnnouncementListWithPaginationRequest): Promise<GetAnnouncementListWithPaginationResponse> => {
  const response = await http.get(
    `${ANNOUNCEMENTS_URL}/offset?page=${page}&size=${size}`,
    generateOptions(),
  );

  return response.data;
};

export const getAnnouncementListWithInfiniteScroll = async ({
  id,
  size,
}: GetAnnouncementListWithInfiniteScrollRequest) => {
  const response = await http.get(
    `${ANNOUNCEMENTS_URL}/cursor?id=${id}&size=${size}`,
    generateOptions(),
  );

  return response.data;
};

export const getAnnouncementContent = async ({
  announcementId,
}: GetAnnouncementContentRequest): Promise<GetAnnouncementContentResponse> => {
  const response = await http.get(`${ANNOUNCEMENTS_URL}/${announcementId}`, generateOptions());

  return response.data;
};

export const editAnnouncementContent = async ({
  announcementId,
  data,
}: EditAnnouncementContentRequest) => {
  return await http.patch(
    `${ANNOUNCEMENTS_URL}/${announcementId}`,
    JSON.stringify(data),
    generateOptions(),
  );
};

export const addAnnouncementContent = async ({
  title,
  content,
  author,
  slackChannel,
}: AddAnnouncementContentRequest) => {
  return await http.post(
    ANNOUNCEMENTS_URL,
    JSON.stringify({
      title,
      content,
      author,
      slackChannel,
    }),
    generateOptions(),
  );
};

export const deleteAnnouncementContent = async ({
  announcementId,
}: DeleteAnnouncementContentRequest) => {
  return await http.delete(`${ANNOUNCEMENTS_URL}/${announcementId}`, generateOptions());
};
