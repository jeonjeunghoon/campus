export type Announcement = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export type AnnouncementListResponse = {
  announcements: Announcement[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type AnnouncementResponse = Omit<Announcement, 'id'>;
