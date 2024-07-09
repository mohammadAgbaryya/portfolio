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

// const arabicFonts = css`
//   @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap');
//   @import url('https://fonts.googleapis.com/css2?family=Mada:wght@200..900&family=Noto+Nastaliq+Urdu:wght@400..700&display=swap');
// `;

const englishFonts = css`
  @import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Caveat:wght@400..700&family=Dancing+Script:wght@400..700&family=Mate+SC&family=Playwrite+BE+WAL:wght@100..400&display=swap');
`;

export default css`
  ${englishFonts}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${THEME.light.text.secondary};
    font-family: 'Baskervville SC', cursive;
    font-optical-sizing: auto;
  }
`;
