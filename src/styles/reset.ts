import { css } from '@emotion/react';

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;

    &:link {
      color: #000000;
    }

    &:visited {
      color: #000000;
    }
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }
`;
