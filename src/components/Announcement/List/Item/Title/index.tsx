import styled from '@emotion/styled';

import { ROUTES } from 'constants/routes';

import StyledLink from 'components/StyledLink';

type Props = {
  id: number;
  title: string;
};

export default function Title({ id, title }: Props) {
  return (
    <StyledLink to={ROUTES.announcement.content.getAbsolutePathWithId(id)}>
      <S.Title>{title}</S.Title>
    </StyledLink>
  );
}

const S = {
  Title: styled.h2`
    font-size: 2.8rem;
  `,
};
