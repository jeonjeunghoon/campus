import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import MascotSvgIcon from 'assets/svg/mascot.svg';

export const ROUTE_URL = {
  HOME: '/',
  ANNOUNCEMENT: '/announcement',
};

// export const URL_NAME = {
//   '/': '우아한테크코스',
//   '/announcement': '공지사항',
// } as const;

// export type UrlNameKey = keyof typeof URL_NAME;

export default function Header() {
  // const { pathname } = useLocation();
  // const name = URL_NAME[pathname];

  return (
    <S.Header>
      <S.Link to={ROUTE_URL.HOME}>
        <MascotSvgIcon />
        공지사항
        {/* {name} */}
      </S.Link>
    </S.Header>
  );
}

const S = {
  Header: styled.header`
    padding-left: 20%;

    background-color: #00d473;
  `,

  Link: styled(Link)`
    display: flex;
    align-items: center;
    width: fit-content;

    font-size: 3.2rem;
    text-decoration: none;

    &,
    &:visited,
    &:hover,
    &:active {
      color: white;
    }
  `,
};
