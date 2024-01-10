import { useAnnouncementMutate } from 'hooks/Announcement/useAnnouncementMutate';

import Button from 'components/Button';

type Props = {
  id: number;
};

export default function DeleteButton({ id }: Props) {
  const { deleteAnnouncementContentMutate } = useAnnouncementMutate();

  const deleteAnnouncementContent = (selectedId: number) => {
    if (confirm('정말 삭제하시겠습니까?')) deleteAnnouncementContentMutate(selectedId);
  };

  return (
    <Button variant='secondary' color='secondary' onClick={() => deleteAnnouncementContent(id)}>
      삭제
    </Button>
  );
}
