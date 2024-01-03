import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import MascotIcon from 'assets/svg/mascot.svg';

import { useCurrentRouteInformation } from './useCurrentRouteInformation';

export default function Header() {
  const { path, title } = useCurrentRouteInformation();

  return (
    <S.Header>
      <S.Link to={path}>
        <MascotIcon />
        <S.Title>{title}</S.Title>
      </S.Link>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    display: flex;
    flex-shrink: 0;
    justify-content: start;
    align-items: center;
    height: 80px;
    padding: 0 120px;

    background-color: ${({ theme }) => theme.colors.primary};
  `,

  Link: styled(Link)`
    display: flex;
    align-items: center;

    &:visited,
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.text};
    }
  `,

  Title: styled.h1`
    font-size: 3.2rem;
    text-decoration: none;
  `,
};
