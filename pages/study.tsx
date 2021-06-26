import ReactMarkdown from "react-markdown";

import StudyMarkdown from "../markdown/study.md"

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 2rem;

  font-size: 2.2rem;
`;

const Study = () => {
  return(
    <Container>
      <ReactMarkdown children={StudyMarkdown} />
    </Container>
  )
}
export default Study;