export type AnnouncementItem = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  slackChannel: string;
};

export type AnnouncementListWithPaginationRequest = {
  page: number;
  size: number;
};

export type AnnouncementListWithPaginationResponse = {
  announcements: AnnouncementItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type AnnouncementListCursorResponse = {
  announcements: AnnouncementItem[];
  hasNext: boolean;
  lastCursorId: number;
};

export type AnnouncementContentResponse = Omit<AnnouncementItem, 'id'>;

export type AnnouncementContentAddRequest = {
  title: FormDataEntryValue | null;
  content: FormDataEntryValue | null;
  author: FormDataEntryValue | null;
  slackChannel: FormDataEntryValue | null;
};

export type AnnouncementContentEditRequest = Omit<AnnouncementContentAddRequest, 'slackChannel'>;
