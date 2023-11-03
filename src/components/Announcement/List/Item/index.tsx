import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { fetchApis } from 'apis/fetch';
import { ROUTES } from 'constants/routes';
import { REQUEST_URL } from 'constants/url';
import { parseCreatedAt } from 'utils/time';

import Button from 'components/Button';

type Props = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  isDashboard?: boolean;
};

export default function Item({ id, title, author, createdAt, isDashboard = false }: Props) {
  const { date, time } = parseCreatedAt(createdAt);

  const deleteAnnouncement = (selectedId: number) => {
    const { mutation } = fetchApis();

    if (confirm('정말 삭제하시겠습니까?'))
      mutation('DELETE', `${REQUEST_URL.announcements}/${selectedId}`);
  };

  return (
    <li>
      <S.Container>
        <S.ContentContainer>
          <Link to={ROUTES.announcementView.getAbsolutePathWithId(id)}>
            <S.Title>{title}</S.Title>
          </Link>
          <S.InfoContainer>
            <p>{author}</p>
            <S.Round />
            <p>{date}</p>
            <p>{time}</p>
          </S.InfoContainer>
        </S.ContentContainer>
        {isDashboard && (
          <S.ManageContainer>
            <S.Link to={`/${ROUTES.announcementEditor.path}`}>수정</S.Link>
            <Button variant='secondary' color='secondary' onClick={() => deleteAnnouncement(id)}>
              삭제
            </Button>
          </S.ManageContainer>
        )}
      </S.Container>
    </li>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 120px;
    padding: 24px 32px;

    background-color: ${({ theme }) => theme.colors.contentWrapper};
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  `,

  Title: styled.h2`
    font-size: 2.8rem;
  `,

  InfoContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    color: ${({ theme }) => theme.colors.infoText};
    font-size: 1.6rem;

    & > p {
      cursor: default;
    }
  `,

  Round: styled.div`
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.infoText};
  `,

  ManageContainer: styled.div`
    display: flex;
    gap: 16px;
  `,

  Link: styled(Link)`
    ${({ theme }) => theme.size.button['medium']}

    background-color: ${({ theme }) => theme.colors.button['primary']};
    &:visited,
    &:active,
    &:hover {
      color: ${({ theme }) => theme.colors.button.text['primary']};
    }
  `,
};
