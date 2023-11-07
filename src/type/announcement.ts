export type Announcement = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type AnnouncementListResponse = {
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

export type AnnouncementEditRequest = {
  title: string;
  content: string;
  author: string;
};
