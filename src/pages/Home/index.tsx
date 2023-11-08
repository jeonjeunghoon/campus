import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';

import StyledLink from 'components/StyledLink';

export default function Home() {
  return (
    <S.Container>
      <StyledLink to={ROUTES.announcementLayout.path} size='large'>
        공지사항
      </StyledLink>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};
