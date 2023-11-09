import { ROUTES } from 'constants/routes';

import { FallbackProps } from 'components/ErrorBoundary';
import StyledLink from 'components/StyledLink';

export default function Error({ title, message }: FallbackProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      <StyledLink to={ROUTES.home.path} size='large'>
        홈페이지로 돌아가기
      </StyledLink>
    </div>
  );
}
