import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CONFIRM, PLACEHOLDER } from 'constants/message';
import { ROUTES } from 'constants/routes';
import { useAnnouncementMutate } from 'hooks/Announcement/useAnnouncementMutate';
import { NAME, formatAnnouncementPayload } from 'utils/announcement/format';

import Button from 'components/Button';

export default function AnnouncementEditor() {
  const { postAnnouncementMutate } = useAnnouncementMutate();
  const navigate = useNavigate();

  const cancelWriting: FormEventHandler = (event) => {
    event.preventDefault();

    if (confirm(CONFIRM.cancel)) navigate(`/${ROUTES.announcementDashboard.path}`);
  };

  const postAnnouncement: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const announcementForm = event.currentTarget;
    const newAnnouncement = formatAnnouncementPayload(announcementForm);

    if (confirm(CONFIRM.post)) postAnnouncementMutate(newAnnouncement);
  };

  return (
    <S.Form method='post' onSubmit={postAnnouncement}>
      <S.InfoContainer>
        <S.AuthorInput
          type='text'
          placeholder={PLACEHOLDER.author}
          name={NAME.author}
          minLength={1}
          maxLength={20}
          required
        />
        <S.SlackChannelInput
          type='text'
          placeholder={PLACEHOLDER.slackChannel}
          name={NAME.slackChannel}
          minLength={1}
          maxLength={50}
          required
        ></S.SlackChannelInput>
      </S.InfoContainer>
      <S.TitleInput
        type='text'
        placeholder={PLACEHOLDER.title}
        name={NAME.title}
        minLength={1}
        maxLength={50}
        required
      />
      <S.ContentTextArea
        placeholder={PLACEHOLDER.content}
        name={NAME.content}
        minLength={1}
        maxLength={65535}
        required
      />
      <S.ActionContainer>
        <Button type='button' variant='secondary' color='secondary' onClick={cancelWriting}>
          취소하기
        </Button>
        <Button type='submit'>등록하기</Button>
      </S.ActionContainer>
    </S.Form>
  );
}

const INPUT_STYLE = css`
  width: 100%;
  padding: 20px 28px;
  border: 1px solid #aaaaaa;
`;

const S = {
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    height: 100%;
    padding: 24px 32px;

    background-color: ${({ theme }) => theme.colors.contentWrapper};
  `,

  InfoContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
    height: 40px;

    & > * {
      font-size: 1.6rem;
    }
  `,

  AuthorInput: styled.input`
    ${INPUT_STYLE}

    width: 30%;
  `,

  SlackChannelInput: styled.input`
    ${INPUT_STYLE}

    width: 70%;
  `,

  TitleInput: styled.input`
    ${INPUT_STYLE}

    width: 100%;
    height: 60px;

    font-size: 3.2rem;
  `,

  ContentTextArea: styled.textarea`
    ${INPUT_STYLE}

    flex: 1;

    font-size: 2rem;
    resize: none;
  `,

  ActionContainer: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;

    & > button {
      width: 50%;
    }
  `,
};
