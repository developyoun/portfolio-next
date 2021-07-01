import type { AppProps } from "next/app";
import Header from "../components/Header";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const GlobalStyle = createGlobalStyle`
  html{
    overflow-y: scroll;
    font-size: 62.5%;
    padding: 0;
  }
  body{
    margin: 0;
    background-color: #1a1a1a;
    color: white;
    
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  };
  a{
    color: inherit; 
    text-decoration: none;
  };
  *{
    box-sizing: border-box;
  };
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
