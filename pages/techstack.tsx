import { useState } from "react";

import TechModal from "../components/teckstack/TechModal";
import stacks from "../data/techstack.json";

import styled from "styled-components";

const Container = styled.div`
  width: 70vw;
  margin: 3rem auto;
  
  column-width: 20vw;
  column-gap: 4rem;
`;
const ImageContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin: 2rem auto;
`;

const Image = styled.img`
  width: 100%;
  box-shadow: 4px 4px 4px #000;
  border-radius: 4px;

  cursor: pointer;
`;

const TechStack = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOn = () => setIsModal(true);
  const modalOff = () => setIsModal(false);


  return(
    <Container>
      {stacks.map((stack, idx) => {
        return (
          <ImageContainer key={idx}>
            <Image 
              src={stack.imageUrl} 
              alt={stack.name}
              onClick={modalOn}
              />
          </ImageContainer>
        )})
      }
      <TechModal show={isModal} showOff={modalOff}/>
    </Container>
  )
}
export default TechStack;