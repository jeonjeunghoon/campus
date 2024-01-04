import styled from '@emotion/styled';

import MascotIcon from 'assets/svg/mascot.svg';
import { ROUTES } from 'constants/routes';

import StyledLink from 'components/StyledLink';

export default function Title() {
  return (
    <StyledLink to={ROUTES.home.path}>
      <S.TitleContainer>
        <MascotIcon />
        <S.Title>{ROUTES.home.title}</S.Title>
      </S.TitleContainer>
    </StyledLink>
  );
}

const S = {
  TitleContainer: styled.div`
    display: flex;
    align-items: center;
  `,

  Title: styled.h1`
    font-size: 3.2rem;
  `,
};
