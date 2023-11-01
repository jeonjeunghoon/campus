import { Link, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import MascotSvgIcon from 'assets/svg/mascot.svg';

const ROUTE_URL = {
  HOME: '/',
  ANNOUNCEMENT: '/announcement',
};

const PAGE_TITLE = {
  '/': '우아한테크코스',
  '/announcement': '공지사항',
} as const;

type PageTitle = keyof typeof PAGE_TITLE;

const typeGuard = (pathname: string): pathname is PageTitle =>
  Object.keys(PAGE_TITLE).includes(pathname);

export default function Header() {
  const { pathname } = useLocation();

  return (
    <S.Header>
      <S.Wrapper>
        <S.Link to={ROUTE_URL.HOME}>
          <MascotSvgIcon />
          {typeGuard(pathname) && PAGE_TITLE[pathname]}
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

    background-color: #00d473;
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
      color: white;
    }
  `,
};
