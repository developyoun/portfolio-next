import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const Title = styled.div`
  margin: 1rem;
  font-size: 1.5rem;
  span{
    font-size: 1.7rem;
    font-weight: bold;
  }
`;
const Content = styled.div`
  font-size: 1.5rem;
`;


const ProfileIntro = () => {
  return (
    <Container>
      <Title>
        "호기심을 해소하려 노력하는 나는,
        <span> 편재호 </span>
        입니다."
      </Title>
      <Content>
        {' '}대학교의 마지막 4학년, 우연히 Netflix를 구독하고, 영화와 드라마같은 미디어를 보고 즐기면서 
        '영화관에서 영화를 보는 것 같다' 는 신박한 느낌은 늦은 나이의 저에게 새로운 꿈을 갖게 했습니다.<br/>
         나도 사람들에게 보는 재미와 함께 새로움을 느끼게 해주는 웹개발자가 되고싶다는 이 꿈을 갖고 여기까지 왔습니다.
        <br/>이런 제 스토리를 밑에서 소개하겠습니다. 🍿
      </Content>
    </Container>
  );
};
export default ProfileIntro;
