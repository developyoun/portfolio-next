import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin: 5rem;
  font-size: 1.6rem;

  display: flex;
  justify-content: space-evenly;
`;

const Projects = () => {
  return(
    <>
    <h1>하이</h1>
    <Container>
      {/* <ReactMarkdown 
        children={MovieAppMarkdown} 
        rehypePlugins={[rehypeRaw]}
      /> */}
      
      <Link href="/projects/movieapp">
        <a>영화 소개 프로젝트</a>
      </Link>
      <Link href="/projects/bookstore">
        <a>도서 관리 플랫폼</a>
      </Link>
      <Link href="/projects/portfolio">
        <a>재호의 포트폴리오 소개</a>
      </Link>      
    </Container>
    </>
  )
}
export default Projects;