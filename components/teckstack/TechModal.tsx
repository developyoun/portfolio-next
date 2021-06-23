import React from "react";

import { Modal, Backdrop, Fade } from "@material-ui/core";
import styled, { keyframes } from "styled-components";

type PropTypes = {
  show: boolean;
  showOff: () => void;
};

const OpenAnimation = keyframes`
  from{
    opacity: 0;
  };
  to{
    opacity: 1;
  }
`;

// const CustomModal = Modal.styled`
//   background-color: #212121;
//   border-radius: 5px;
//   width: 50vw;
//   height: 70vh;
//   animation: ${OpenAnimation} .4s ease-in-out;
// `;

const CustomModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  color: black;
  height: 30vh;
`;

const TechModal = ({ show, showOff }: PropTypes) => {

  return (
    // <CustomModal 
    //   isOpen={show} 
    //   onBackgroundClick={showOff} 
    //   onEscapeKeydown={showOff} 
    //   allowScroll
    // >
    <CustomModal
      open={show}
      onClose={showOff}
      disableScrollLock
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={show}>
        <div>
          <h2>Transition modal</h2>
          <p>react-transition-group animates me.</p>
        </div>
        </Fade>
    </CustomModal>
    // </CustomModal>
  );
};
export default React.memo(TechModal);
