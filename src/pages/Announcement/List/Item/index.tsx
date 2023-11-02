import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

type Props = {
  title: string;
  author: string;
  createdAt: string;
};

export default function Item({ title, author, createdAt }: Props) {
  return (
    <li>
      <S.Link to=''>
        <S.Title>{title}</S.Title>
        <S.Container>
          <p>{author}</p>
          <p>•</p>
          <p>{createdAt}</p>
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
    padding: 28px 24px;
    border-radius: 8px;

    background-color: #ffffff;
  `,

  Title: styled.h2`
    font-size: 2.8rem;
  `,

  Container: styled.div`
    display: flex;
    gap: 4px;

    color: #aaaaaa;
    font-size: 1.6rem;
  `,

  AuthorText: styled.p``,

  CreatedAtText: styled.p``,
};
