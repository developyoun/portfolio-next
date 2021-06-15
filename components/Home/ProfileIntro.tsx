import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 1rem;
  /* font-size: 12px; */
`;


const ProfileIntro = () => {
  return(
    <Container>
      <Title>"호기심을 해소하려 노력하는 편재호입니다."</Title>      
    </Container>
  )
}
export default ProfileIntro;