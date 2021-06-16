import ReactCardFlip from 'react-card-flip';

import ProfileImage from "../components/Home/ProfileImage";
import ProfileIntro from "../components/Home/ProfileIntro";

import styled from "styled-components";
import { useState } from 'react';
import ArrowMark from '../components/Home/ArrowMark';

const Container = styled.div`
  margin: 2rem;
`;

export type PropsType = {
  flip: () => void;
}

const Home = () => {

  const [isFilp, setIsFlip] = useState(false);
  const handleFlip = () => setIsFlip(!isFilp)

  return(
    <Container>
      <ReactCardFlip 
        isFlipped={isFilp} 
        containerStyle={{width:"70%", height:"50vw", display:"block", margin:"0 auto"}}
      >
        <ProfileImage flip={handleFlip}/>
        <ProfileIntro flip={handleFlip}/>
      </ReactCardFlip>
      <ArrowMark />
    </Container>
  )
};
export default Home;
