import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAnnouncement, postAnnouncement } from 'apis/announcement';
import { AnnouncementAddRequest } from 'type/announcement';

export const useAnnouncementMutate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: postAnnouncementMutate } = useMutation({
    mutationFn: (data: AnnouncementAddRequest) => postAnnouncement(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
      navigate('/');
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
