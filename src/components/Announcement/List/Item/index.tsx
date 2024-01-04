import { useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';

import DeleteButton from './DeleteButton';
import EditLink from './EditLink';
import Information from './Information';
import Title from './Title';

type Props = {
  id: number;
  title: string;
  author: string;
  slackChannel: string;
  createdAt: string;
};

export default function Item({ id, title, author, slackChannel, createdAt }: Props) {
  const { pathname } = useLocation();

  return (
    <S.Item>
      <S.ContentContainer>
        <Title id={id} title={title} />
        <Information author={author} slackChannel={slackChannel} createdAt={createdAt} />
      </S.ContentContainer>
      {pathname.includes(ROUTES.dashboard.path) && (
        <S.ActionContainer>
          <EditLink id={id} />
          <DeleteButton id={id} />
        </S.ActionContainer>
      )}
    </S.Item>
  );
}

const S = {
  Item: styled.li`
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

  ActionContainer: styled.div`
    display: flex;
    gap: 16px;
  `,
};
