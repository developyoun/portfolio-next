import type { AppProps } from "next/app";
import Header from "../components/Header";

import styled,{ createGlobalStyle } from "styled-components";
import { ModalProvider, BaseModalBackground } from "styled-react-modal";

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    overflow-y: scroll;
  }
  body{
    padding: 0;
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

const ModalComponent = styled(BaseModalBackground)`
  left: 0;
  right: 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ModalProvider backgroundComponent={ModalComponent}>
        <Header />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
export default MyApp;
