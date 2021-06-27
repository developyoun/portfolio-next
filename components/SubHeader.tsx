import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Anchor = styled.a`
  padding: 1rem;
  border-radius: 5px;
  background-color: transparent;
  color: #7986cb;

  transition: all 0.4s;
  :hover{
    background-color: #7986cb;
    color: #1a1a1a;
  }
`;


const SubHeader = () => {
  return(
    <Container>
      <Link href="/projects/movieapp" passHref>
        <Anchor>영화 소개 프로젝트</Anchor>
      </Link>
      <Link href="/projects/bookstore" passHref>
        <Anchor>도서 관리 플랫폼</Anchor>
      </Link>
      <Link href="/projects/portfolio" passHref>
        <Anchor>재호의 포트폴리오</Anchor>
      </Link>      
    </Container>
  )
}
export default SubHeader;