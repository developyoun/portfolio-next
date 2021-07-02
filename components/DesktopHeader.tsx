import Link from "next/link";

import styled, { keyframes } from "styled-components";
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook } from "react-icons/ai";

const HoverInAnimation = keyframes`
  from{ color: rgb(176, 190, 197) }
  to{ color: rgb(176, 190, 197, 0.4) }
`;
const HoverOutAnimation = keyframes`
  from{ color: rgb(176, 190, 197, 0.4) }
  to{ color: rgb(176, 190, 197) }
`;
const Vibrate = keyframes`
  0%{
    transform: translateX(0);
  }
  25%{
    transform: translateX(-0.2rem);
  }
  50%{
    transform: translateX(0);
  }
  75%{
    transform: translateX(0.2rem);
  }
  100%{
    transform: translateX(0)
  }
`;
const Block = styled.div`
  height: 50px;
`;
const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  padding: 0 2rem;
  background-color: #222;
  z-index: 1;
`;
const Div = styled.div`
  a {
    text-decoration: none;
    :link,
    :visited {
      animation: ${HoverOutAnimation} 0.5s ease-in alternate forwards;
    }
    :hover {
      animation: ${HoverInAnimation} 0.5s ease-in-out alternate forwards;
    }
  }
  svg {
    padding-left: 2rem;
    font-size: 4.5rem;
    color: rgb(176, 190, 197);
    :hover {
      cursor: pointer;
      animation: ${Vibrate} 0.2s linear infinite;
    }
  }
`;
const Font = styled.div<{ fontsize: string }>`
  font-size: ${props => props.fontsize || "2rem"};
  text-align: center;
  font-weight: bold;
`;

const DesktopHeader = () => {
  return (
    <Block>
      <Container>
        <Div>
          <Link href="/">
            <a>
              <Font fontsize="2.4rem">JaeHo Pyoun</Font>
              <Font fontsize="0.8rem">byname. developyoun</Font>
            </a>
          </Link>
        </Div>
        <Div>
          <Link href="/techstack">Tech-Stack</Link>
        </Div>
        <Div>
          <Link href="/projects">Projects</Link>
        </Div>
        <Div>
          <Link href="/study">History</Link>
        </Div>

        <Div>
          <a href="mailto:pyoun820@naver.com">
            <AiOutlineMail />
          </a>
          <a href="tel:01065998851">
            <AiOutlinePhone />
          </a>
          <a target="_blank" href="https://www.facebook.com/100003332153341">
            <AiOutlineFacebook />
          </a>
        </Div>
      </Container>
    </Block>
  );
};
export default DesktopHeader;
