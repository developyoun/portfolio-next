import { useState } from "react";

import TechModal from "../components/teckstack/TechModal";
import stacks from "../data/techstack.json";

import styled from "styled-components";

export type StackType = {
  class: string;
  content: string[];
  imageUrl: string;
  level: number;
  name: string;
  backgroundColor: string;
}


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

  transition: all .5s;
  cursor: pointer;
  :hover{
    transform: scale(1.2);
  }
`;

const TechStack = () => {
  const [isModal, setIsModal] = useState(false);
  const [data, setData] = useState<StackType>({
    class: "",
    content: [],
    imageUrl: "",
    level: 0,
    name: "",
    backgroundColor: "",
  });

  const modalOn = (stack:StackType) => {
    setIsModal(true)
    setData(stack)
  };
  const modalOff = () => setIsModal(false);

  return(
    <Container>
      {stacks.map((stack, idx) => {
        return (
          <ImageContainer key={idx}>
            <Image 
              src={stack.imageUrl} 
              alt={stack.name}
              onClick={() => modalOn(stack)}
              />
          </ImageContainer>
        )})
      }
      <TechModal show={isModal} showOff={modalOff} data={data}/>
    </Container>
  )
}
export default TechStack;