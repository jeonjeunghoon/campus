import styled from '@emotion/styled';

import { useAnnouncement } from './useAnnouncement';

export default function AnnouncementView() {
  const { author, date, time, title, content, isLoading, isError } = useAnnouncement();

  if (isLoading) return <div>로딩 중...</div>;

  if (isError) return <div>에러</div>;

  return (
    <S.Container>
      <S.InformationSection>
        <S.AuthorText>{author}</S.AuthorText>
        <S.DateContainer>
          <span>{date}</span>
          <span>{time}</span>
        </S.DateContainer>
      </S.InformationSection>
      <S.ContentContainer>
        <S.Title>
          <h1>{title}</h1>
        </S.Title>
        <S.Article>{content}</S.Article>
      </S.ContentContainer>
    </S.Container>
  );
}

const ContentWrapper = `
  padding: 24px 32px;

  background-color: #ffffff;
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
      background-color: #ffffff;
    }
  `,

  AuthorText: styled.p``,

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

    font-size: 3.6rem;
  `,

  Article: styled.article`
    ${ContentWrapper}

    flex-grow: 1;

    font-size: 2rem;
  `,
};
