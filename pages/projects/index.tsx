import SubHeader from "../../components/SubHeader";

import styled, { keyframes } from "styled-components";

const Animate = keyframes`
  0%{
    transform: translateX(0);
  }
  25%{
    transform: translateX(-2px);
  }
  50%{
    transform: translateX(0px);
  }
  75%{
    transform: translateX(2px);
  }
  100%{
    transform: translateX(0);
  }
`;

const Title = styled.div`
  margin: 4rem;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  animation: ${Animate} 0.5s linear infinite;
`;

const Projects = () => {
  return(
    <>
      <SubHeader />
      <Title>
        π Project νμ΄νμ ν΄λ¦­ ν΄μ£ΌμΈμ π
      </Title>
    </>

  )
}
export default Projects;