import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';
import { parseCreatedAt } from 'utils/time';

type Props = {
  id: number;
  title: string;
  author: string;
  createdAt: string;
};

export default function Item({ id, title, author, createdAt }: Props) {
  const { date, time } = parseCreatedAt(createdAt);

  return (
    <li>
      <S.Link to={ROUTES.announcementView.getPathWithId(id)}>
        <S.Title>{title}</S.Title>
        <S.Container>
          <p>{author}</p>
          <S.Round />
          <p>{date}</p>
          <p>{time}</p>
        </S.Container>
      </S.Link>
    </li>
  );
}

const S = {
  Link: styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: 120px;
    padding: 24px 32px;

    background-color: #ffffff;
  `,

  Title: styled.h2`
    font-size: 2.8rem;
  `,

  Container: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    color: #aaaaaa;
    font-size: 1.6rem;
  `,

  Round: styled.div`
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;

    background-color: #aaaaaa;
  `,
};