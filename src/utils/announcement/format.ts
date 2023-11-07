export const NAME = {
  title: 'title',
  content: 'content',
  author: 'author',
  slackChannel: 'slackChannel',
} as const;

export const formatAnnouncementPayload = (announcementForm: HTMLFormElement) => {
  const announcementFormData = new FormData(announcementForm);
  const announcementPayload = {
    [NAME.title]: announcementFormData.get(NAME.title),
    [NAME.content]: announcementFormData.get(NAME.content),
    [NAME.author]: announcementFormData.get(NAME.author),
    [NAME.slackChannel]: announcementFormData.get(NAME.slackChannel),
  };

  return announcementPayload;
};
