import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  deleteAnnouncementContent,
  editAnnouncementContent,
  addAnnouncementContent,
} from 'apis/announcement';
import { ROUTES } from 'constants/routes';
import { AddAnnouncementContentRequest, EditAnnouncementContentRequest } from 'type/announcement';

export const useAnnouncementMutate = (id: number = 0) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: editAnnouncementContentMutate } = useMutation({
    mutationFn: (data: EditAnnouncementContentRequest) => editAnnouncementContent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
      const url = `/announcement/${id}`;

      navigate(url);
    },
  });

  const { mutate: postAnnouncementContentMutate } = useMutation({
    mutationFn: (data: AddAnnouncementContentRequest) => addAnnouncementContent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });

      navigate(`/${ROUTES.announcement.path}`);
    },
  });

  const { mutate: deleteAnnouncementContentMutate } = useMutation({
    mutationFn: deleteAnnouncementContent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['announcementList'] });
    },
  });

  return {
    editAnnouncementContentMutate,
    postAnnouncementContentMutate,
    deleteAnnouncementContentMutate,
  };
};
