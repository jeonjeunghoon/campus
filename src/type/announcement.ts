export type Announcement = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  slackChannel: string;
};

export type AnnouncementListPaginationRequest = {
  pageNum: number;
  sizePerPage: number;
};

export type AnnouncementListPaginationResponse = {
  announcements: Announcement[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type AnnouncementListCursorResponse = {
  announcements: Announcement[];
  hasNext: boolean;
  lastCursorId: number;
};

export type AnnouncementResponse = Omit<Announcement, 'id'>;

export type AnnouncementAddRequest = {
  title: FormDataEntryValue | null;
  content: FormDataEntryValue | null;
  author: FormDataEntryValue | null;
  slackChannel: FormDataEntryValue | null;
};

export type AnnouncementEditRequest = Omit<AnnouncementAddRequest, 'slackChannel'>;
