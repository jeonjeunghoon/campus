import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import MascotSvgIcon from 'assets/svg/mascot.svg';

import { useCurrentRouteInformation } from './useCurrentRouteInformation';

export default function Header() {
  const { path, title } = useCurrentRouteInformation();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Link to={path}>
          <MascotSvgIcon />
          {title}
        </S.Link>
      </S.Wrapper>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;

    background-color: ${({ theme }) => theme.colors.primary};
  `,

  Wrapper: styled.div`
    width: 1000px;
  `,

  Link: styled(Link)`
    display: flex;
    align-items: center;
    width: fit-content;

    font-size: 3.2rem;
    text-decoration: none;

    &:visited,
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.text};
    }
  `,
};
