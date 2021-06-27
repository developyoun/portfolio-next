import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';

import MovieAppMarkdown from "../markdown/movie_app.md";

import styled from "styled-components";

const Container = styled.div`
  margin: 5rem;
  font-size: 1.6rem;
`;



const Projects = () => {
  return(
    <Container>
      <ReactMarkdown children={MovieAppMarkdown} rehypePlugins={[rehypeRaw]}
      />
    </Container>
  )
}
export default Projects;