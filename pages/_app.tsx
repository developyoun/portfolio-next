import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "../components/Header";

import { createGlobalStyle } from "styled-components";

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
  const router = useRouter();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
