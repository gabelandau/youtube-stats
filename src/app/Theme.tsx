import { FC, ReactNode } from 'react';
import { Global, ThemeProvider, css } from '@emotion/react';
import { grayDark } from '@radix-ui/colors';

import '../assets/reset.css';

interface Props {
  children: ReactNode;
}

const globalStyles = css`
  html {
    background-color: ${grayDark.gray1};
    color: ${grayDark.gray12};
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 4.209rem;
  }

  h2 {
    font-size: 3.157rem;
  }

  h3 {
    font-size: 2.369rem;
  }

  h4 {
    font-size: 1.777rem;
  }

  h5 {
    font-size: 1.333rem;
  }
`;

const theme = {
  colors: {
    ...grayDark
  },
};

const Theme: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
