import ReactMarkdown from "react-markdown";

import HistoryMarkDown from "../markdown/history.md";

import styled from "styled-components";

const Container = styled.div`
  font-size: 1.6rem;
  margin:5rem 10rem;
  text-align: center;
  
  h3{
    color: #ffcdd2;
  }
  h4{
    color: #e3f2fd;
  }
`;

const Study = () => {
  return(
    <Container>
      <ReactMarkdown children={HistoryMarkDown}/>
    </Container>
  )
}
export default Study;