import { ROUTES } from 'constants/routes';

import StyledLink from 'components/StyledLink';

type Props = {
  id: number;
};

export default function EditLink({ id }: Props) {
  return (
    <StyledLink to={ROUTES.dashboard.announcement.editor.path} state={id}>
      수정
    </StyledLink>
  );
}
