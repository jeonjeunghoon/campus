import { useEffect, useState } from 'react';

import { useAnnouncement } from 'pages/Announcement/Content/useAnnouncement';

export const useAnnouncementEditor = (announcementId: number) => {
  const [author, setAuthor] = useState('');
  const [slackChannel, setSlackChannel] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const {
    author: initialAuthor,
    slackChannel: initialSlackChannel,
    title: initialTitle,
    content: initialContent,
  } = useAnnouncement(announcementId);

  const isEdit = Boolean(announcementId);

  useEffect(() => {
    if (!isEdit) return;

    if (initialAuthor) setAuthor(initialAuthor);
    if (initialSlackChannel) setSlackChannel(initialSlackChannel);
    if (initialTitle) setTitle(initialTitle);
    if (initialContent) setContent(initialContent);
  }, [initialAuthor, initialSlackChannel, initialTitle, initialContent, isEdit]);

  return {
    isEdit,
    author,
    slackChannel,
    title,
    content,
    setAuthor,
    setSlackChannel,
    setTitle,
    setContent,
  };
};
