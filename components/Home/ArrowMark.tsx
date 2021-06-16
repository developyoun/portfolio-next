import styled, { keyframes } from "styled-components";

const ClickAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  25%{
    transform: translateY(-0.4rem);
  }
  50%{
    transform: translateY(0);
  }
  75%{
    transform: translateY(0.4rem);
  }
  100%{
    transform: translateY(0)
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;
const Font = styled.div`  
  font-size: 1.5rem;
  display: inline-block;
  animation: ${ClickAnimation} 0.5s linear infinite;
`;

const ArrowMark = () => {
  return(
    <Container>
    <Font>👆</Font> &nbsp;Click!
    </Container>
  )
}
export default ArrowMark;