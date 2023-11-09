import { useEffect, useState } from 'react';

import { useAnnouncement } from 'pages/AnnouncementView/useAnnouncement';

export const useAnnouncementEditor = (announcementId: string | number) => {
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

  useEffect(() => {
    if (initialAuthor) setAuthor(initialAuthor);
    if (initialSlackChannel) setSlackChannel(initialSlackChannel);
    if (initialTitle) setTitle(initialTitle);
    if (initialContent) setContent(initialContent);
  }, [initialAuthor, initialSlackChannel, initialTitle, initialContent]);

  const isEdit = Boolean(announcementId);

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
