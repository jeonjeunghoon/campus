import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import { useAnnouncement } from './useAnnouncement';

export default function Announcement() {
  const { announcementId } = useParams();
  const { author, slackChannel, date, time, title, content } = useAnnouncement(announcementId);

  return (
    <S.Container>
      <S.InformationSection>
        <p>{slackChannel}</p>
        <p>{author}</p>
        <S.DateContainer>
          <span>{date}</span>
          <span>{time}</span>
        </S.DateContainer>
      </S.InformationSection>
      <S.ContentContainer>
        <S.Title>{title}</S.Title>
        <S.Article>{content}</S.Article>
      </S.ContentContainer>
    </S.Container>
  );
}

const ContentWrapper = `
  padding: 24px 32px;
`;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
  `,

  InformationSection: styled.section`
    display: flex;
    gap: 16px;

    font-size: 1.6rem;

    & > * {
      padding: 16px 24px;
      background-color: ${({ theme }) => theme.colors.contentWrapper};
    }
  `,

  DateContainer: styled.div`
    display: flex;
    gap: 12px;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 16px;
  `,

  Title: styled.h1`
    ${ContentWrapper}

    background-color: ${({ theme }) => theme.colors.contentWrapper};
    font-size: 3.6rem;
  `,

  Article: styled.article`
    ${ContentWrapper}

    flex-grow: 1;

    background-color: ${({ theme }) => theme.colors.contentWrapper};
    font-size: 2rem;
  `,
};
