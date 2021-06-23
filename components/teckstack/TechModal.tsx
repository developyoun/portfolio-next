import React from "react";

import styled from "styled-components";
import Modal from "styled-react-modal";

const CustomModal = Modal.styled`
  background-color: white;
  width: 20rem;
  height: 20rem;
`;

const Container = styled.div`
`;

type PropTypes = {
  show: boolean;
  showOff: () => void;
}

const TechModal = ({show, showOff}: PropTypes) => {
  return(
    <CustomModal
      isOpen={show}
      onBackgroundClick={showOff}
      onEscapeKeydown={showOff}
    >
      <Container>
      </Container>

    </CustomModal>

  )
}
export default React.memo(TechModal);