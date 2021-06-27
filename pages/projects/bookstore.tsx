import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SubHeader from "../../components/SubHeader";
import BookstoreMarkdown from "../../markdown/bookstore.md";
import BookstoreFrontEndMarkdown from "../../markdown/bookstore_frontend.md";

import styled from "styled-components";

const Container = styled.div`
  margin: 3rem;
  font-size: 1.8rem;
`;

const Bookstore = () => {
  return (
  <>
    <SubHeader />
    <Container>
      <ReactMarkdown children={BookstoreMarkdown} rehypePlugins={[rehypeRaw]}/>
      <ReactMarkdown children={BookstoreFrontEndMarkdown} rehypePlugins={[rehypeRaw]}/>
    </Container>
  </>
  )
}
export default Bookstore;