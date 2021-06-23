import stacks from "../data/techstack.json";
import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  margin: 3rem auto;
  
  column-width: 20vw;
  column-gap: 3rem;
`;
const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  /* height: 100%; */
  margin: 2rem 0;

`;

const Image = styled.img`
  width: 100%;
  box-shadow: 4px 4px 4px #000;
  border-radius: 4px;
`;

const TechStack = () => {
  return(
    <Container>
      {stacks.map((stack, idx) => {
        return (
          <ImageContainer key={idx}>
            <Image 
              src={stack.imageUrl} 
              alt={stack.name}
              />
          </ImageContainer>
        )})
      }
    </Container>
  )
}
export default TechStack;