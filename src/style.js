import { css } from '@emotion/react';

export const THEME = {
  padding: {
    main: 24,
  },
  light: {
    text: {
      secondary: '#34495e',
    },
  },
  dark: {},
};

// const fontImports = css`
//   @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Mada:wght@200..900&family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');
// `;

export default css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${THEME.light.text.secondary};
    padding: ${THEME.padding.main}px;
  }
`;
