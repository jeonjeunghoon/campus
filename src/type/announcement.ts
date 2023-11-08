export type Announcement = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  slackChannel: string;
};

export type AnnouncementListOffsetResponse = {
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

export type AnnouncementResponse = Omit<Announcement, 'id' | 'slackChannel'>;

export type AnnouncementAddRequest = {
  title: FormDataEntryValue | null;
  content: FormDataEntryValue | null;
  author: FormDataEntryValue | null;
  slackChannel: FormDataEntryValue | null;
};

export type AnnouncementEditRequest = Omit<AnnouncementAddRequest, 'slackChannel'>;
