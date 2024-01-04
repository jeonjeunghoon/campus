import { LinkProps, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { ColorList, VariantList } from 'type/style';

type Props = {
  to: string;
  variant?: VariantList;
  color?: ColorList;
} & LinkProps;

export default function StyledLink({
  to,
  variant = 'primary',
  color = 'primary',
  children,
  ...rest
}: Props) {
  return (
    <S.StyledLink to={to} variant={variant} color={color} {...rest}>
      {children}
    </S.StyledLink>
  );
}

const S = {
  StyledLink: styled(Link)<{ variant: VariantList; color: ColorList }>`
    background-color: ${({ theme, variant }) => theme.colors.button[variant]};
    color: ${({ theme, color }) => theme.colors.button.text[color]};

    &:visited,
    &:active,
    &:hover {
      color: ${({ theme, color }) => theme.colors.button.text[color]};
    }
  `,
};
