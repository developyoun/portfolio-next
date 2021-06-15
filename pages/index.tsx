import ProfileImage from "../components/Home/ProfileImage";
import ProfileIntro from "../components/Home/ProfileIntro";
import styled from "styled-components";

const Container = styled.div`
  margin: 2rem;
  `;
const HomeTop = styled.div`
  display: flex;
`
const Home = () => {
  return <Container>
    <HomeTop>
      <ProfileImage />
      <ProfileIntro />
    </HomeTop>
    
  </Container>;
};
export default Home;
