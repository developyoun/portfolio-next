import ReactCardFlip from "react-card-flip";

import ProfileImage from "../components/home/ProfileImage";
import ProfileIntro from "../components/home/ProfileIntro";

import styled from "styled-components";
import { useState } from "react";
import ArrowMark from "../components/home/ArrowMark";

const Container = styled.div`
  margin: 2rem;
`;

export type PropsType = {
  flip: () => void;
};

const Home = () => {
  const [isFilp, setIsFlip] = useState(false);
  const handleFlip = () => setIsFlip(!isFilp);

  return (
    <Container>
      <div>
        <ReactCardFlip isFlipped={isFilp}>
          <ProfileImage flip={handleFlip} />
          <ProfileIntro flip={handleFlip} />
        </ReactCardFlip>
        <ArrowMark />
      </div>
    </Container>
  );
};
export default Home;
