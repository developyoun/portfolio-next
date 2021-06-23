import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import Modal from "styled-react-modal";

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
const CloseAnimation = keyframes`
  from{
    opacity: 0;
  };
  to{
    opacity: 1;
  }
`;


const CustomModal = Modal.styled`
  background-color: black;
  width: 80vw;
  height: 20rem;
  opacity: 1;
  animation: ${OpenAnimation} .4s ease-in-out;
`;

const Container = styled.div`
  color: black;
`;

const TechModal = ({ show, showOff }: PropTypes) => {

  return (
    <CustomModal 
      isOpen={show} 
      onBackgroundClick={showOff} 
      onEscapeKeydown={showOff} 
      allowScroll={true}
    >
      <Container>
        하이
      </Container>
    </CustomModal>
  );
};
export default React.memo(TechModal);
