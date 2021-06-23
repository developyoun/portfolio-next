import ReactCardFlip from 'react-card-flip';

import ProfileImage from "../components/home/ProfileImage";
import ProfileIntro from "../components/home/ProfileIntro";
import History from "../components/home/MyHistory"

import styled from "styled-components";
import { useState } from 'react';
import ArrowMark from '../components/home/ArrowMark';

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
        containerStyle={{width:"70%", height:"40vw", display:"block", margin:"0 auto"}}
        >
        <ProfileImage flip={handleFlip}/>
        <ProfileIntro flip={handleFlip}/>
      </ReactCardFlip>
      <ArrowMark />
      <History />
    </Container>
  )
};
export default Home;
