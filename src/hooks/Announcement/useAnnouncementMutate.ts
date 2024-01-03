import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteAnnouncement, editAnnouncement, addAnnouncement } from 'apis/announcement';
import { ROUTES } from 'constants/routes';
import { AnnouncementAddRequest, AnnouncementEditRequest } from 'type/announcement';

export const useAnnouncementMutate = (id: number = 0) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: editAnnouncementMutate } = useMutation({
    mutationFn: (data: AnnouncementEditRequest) => editAnnouncement(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
      const url = `/announcement/${id}`;

      navigate(url);
    },
  });

  const { mutate: postAnnouncementMutate } = useMutation({
    mutationFn: (data: AnnouncementAddRequest) => addAnnouncement(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });

      navigate(`/${ROUTES.announcement.path}`);
    },
  });

  const { mutate: deleteAnnouncementMutate } = useMutation({
    mutationFn: deleteAnnouncement,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
    },
  });

  return { editAnnouncementMutate, postAnnouncementMutate, deleteAnnouncementMutate };
};
