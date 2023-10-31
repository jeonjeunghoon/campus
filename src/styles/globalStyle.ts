import { css } from '@emotion/react';

import { reset } from './reset';

const globalStyle = css`
  ${reset}

  html {
    font-size: 10px;
    font-family: 'BMHANNApro';
  }

  @font-face {
    font-family: 'BMHANNAPro';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'BMHANNAAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export default globalStyle;
