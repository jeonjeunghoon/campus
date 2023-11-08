import { useState } from 'react';

import { useAnnouncement } from 'pages/AnnouncementView/useAnnouncement';

export const useAnnouncementEditor = (state: string | number) => {
  const {
    author: initialAuthor,
    title: initialTitle,
    content: initialContent,
  } = useAnnouncement(state);
  const [author, setAuthor] = useState(initialAuthor);
  const [slackChannel, setSlackChannel] = useState('');
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const isEdit = Boolean(state);

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
