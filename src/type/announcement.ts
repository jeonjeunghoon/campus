export type AnnouncementItem = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  slackChannel: string;
};

export type GetAnnouncementListWithPaginationRequest = {
  page: number;
  size: number;
};

export type GetAnnouncementListWithPaginationResponse = {
  announcements: AnnouncementItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type GetAnnouncementListWithInfinityScrollResponse = {
  announcements: AnnouncementItem[];
  hasNext: boolean;
  lastCursorId: number;
};

export type GetAnnouncementContentResponse = Omit<AnnouncementItem, 'id'>;

export type AddAnnouncementContentRequest = {
  title: FormDataEntryValue | null;
  content: FormDataEntryValue | null;
  author: FormDataEntryValue | null;
  slackChannel: FormDataEntryValue | null;
};

export type EditAnnouncementContentRequest = Omit<AddAnnouncementContentRequest, 'slackChannel'>;
