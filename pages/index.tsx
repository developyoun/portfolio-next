import ReactCardFlip from 'react-card-flip';

import ProfileImage from "../components/Home/ProfileImage";
import ProfileIntro from "../components/Home/ProfileIntro";

import styled from "styled-components";
import { useState } from 'react';

const Container = styled.div`
  margin: 2rem;
  `;
const HomeTop = styled.div`
  display: flex;
`



export type PropsType = {
  flip: () => void;
}


const Home = () => {

  const [isFilp, setIsFlip] = useState(false);
  const handleFlip = () => setIsFlip(!isFilp)

  // console.log(isFilp)
  return <Container>
    <HomeTop>
      <ReactCardFlip isFlipped={isFilp}>
        {/* <button onClick={handleFlip}> */}
          <ProfileImage flip={handleFlip}/>
        {/* </button> */}
        {/* <button onClick={handleFlip}> */}
          <ProfileIntro flip={handleFlip}/>
        {/* </button> */}
      </ReactCardFlip>
    </HomeTop>
    
  </Container>;
};
export default Home;
