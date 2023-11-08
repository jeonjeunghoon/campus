import { LinkProps, Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { ColorList, SizeList, VariantList } from 'type/style';

type Props = {
  to: string;
  variant?: VariantList;
  size?: SizeList;
  color?: ColorList;
} & LinkProps;

export default function StyledLink({
  to,
  variant = 'primary',
  size = 'medium',
  color = 'primary',
  children,
  ...rest
}: Props) {
  return (
    <S.StyledLink to={to} variant={variant} size={size} color={color} {...rest}>
      {children}
    </S.StyledLink>
  );
}

const S = {
  StyledLink: styled(Link)<{ variant: VariantList; size: SizeList; color: ColorList }>`
    ${({ theme, size }) => theme.size.button[size]}
    background-color: ${({ theme, variant }) => theme.colors.button[variant]};
    color: ${({ theme, color }) => theme.colors.button.text[color]};

    &:visited,
    &:active,
    &:hover {
      color: ${({ theme, color }) => theme.colors.button.text[color]};
    }
  `,
};
