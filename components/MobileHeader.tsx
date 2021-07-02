import { useState } from "react";
import Link from "next/link";

import styled, { keyframes } from "styled-components";
import MenuIcon from "@material-ui/icons/Menu"
import { Drawer } from "@material-ui/core";
import { AiOutlineMail, AiOutlinePhone, AiOutlineFacebook } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";


const Container = styled.div`
  background-color: #222;
  width: 100%;
  height: 50px;
`;
const Button = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  border: none;
  background-color: #263238;
  box-shadow: 1px 1px 1px;

  svg{
    color: white;
  }
`; 
const MenuButton = styled(MenuIcon)`
  position: absolute;
  color: #bdbdbd;
  top: 3px;
  left: 3px;
  box-shadow: 1px 1px 1px 1px black;

  &.MuiSvgIcon-root{
    width: 44px;
    height: 44px;
    font-size: 2.4rem;
  }
`;

const Font = styled.div<{fontsize:string}>`
  font-size: ${props => props.fontsize || "2rem"};
  text-align: center;
  font-weight: bold;
`;


const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const clickEvent = (path:string) => {
    route.push(path);
    close();
  };

  return(
    <Container>
      <MenuButton onClick={open} />
      <div onClick={() => clickEvent('/')}>
        <Font fontsize="2.4rem">JaeHo Pyoun</Font>
        <Font fontsize="0.8rem">byname. developyoun</Font>
      </div>
      <Drawer anchor="left" open={isOpen} onClose={close}>
        <div onClick={() => clickEvent("/techstack")}>Tech-Stack</div>
        <div onClick={() => clickEvent("/projects")}>Projects</div>
        <div onClick={() => clickEvent("/history")}>history</div>

        <a href="mailto:pyoun820@naver.com"><AiOutlineMail /></a>
        <a href="tel:01065998851"><AiOutlinePhone /></a>
        <a target="_blank" href="https://www.facebook.com/100003332153341"><AiOutlineFacebook /></a>
      </Drawer>
    </Container>
  )
}
export default MobileHeader;