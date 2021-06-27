import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import SubHeader from "../../components/SubHeader";
import PortfolioMarkdown from "../../markdown/portfolio.md";

import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  font-size: 1.8rem;
`;

const Portfolio = () => {
  return (
  <>
    <SubHeader />
    <Container>
      <ReactMarkdown children={PortfolioMarkdown} rehypePlugins={[rehypeRaw]} />
    </Container>
  </>
  )
}
export default Portfolio;