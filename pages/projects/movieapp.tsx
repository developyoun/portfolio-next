import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SubHeader from "../../components/SubHeader";
import MovieAppMarkdown from "../../markdown/movie_app.md";

import styled from "styled-components";

const Container = styled.div`
  margin: 3rem;
  font-size: 1.8rem;
`;

const MovieApp = () => {
  return (
    <>
      <SubHeader/>
      <Container>
        <ReactMarkdown children={MovieAppMarkdown} rehypePlugins={[rehypeRaw]} />
      </Container>
    </>
  )
}
export default MovieApp;