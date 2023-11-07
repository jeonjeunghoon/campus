import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAnnouncement, postAnnouncement } from 'apis/announcement';
import { AnnouncementAddRequest } from 'type/announcement';

export const useAnnouncementMutate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postAnnouncementMutate } = useMutation({
    mutationFn: (data: AnnouncementAddRequest) => postAnnouncement(data),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });

      const trimmedUrl = response.replace('/api', '').replace('/announcements', '/announcement');
      navigate(trimmedUrl);
    },
  });

  const { mutate: deleteAnnouncementMutate } = useMutation({
    mutationFn: deleteAnnouncement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
    },
  });

  return { postAnnouncementMutate, deleteAnnouncementMutate };
};
