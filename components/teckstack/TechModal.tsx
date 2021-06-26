import React from "react";
import { StackType } from "../../pages/techstack";

import { Modal, Backdrop, Fade, LinearProgress } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import styled from "styled-components";

type PropTypes = {
  show: boolean;
  data: StackType;
  showOff: () => void;
};

const CustomModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paper = styled.div<{imageUrl?:string}>`
  outline: none;
  box-shadow: 10px 10px 10px black;
  border-radius: 11px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50vw;
`;
const PaperContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: #e0e0e0;
  padding: 3rem;
`;

const ModalHead = styled.div`
  margin: 1rem;
  .data__name{
    font-size: 4rem;
    font-weight: bolder;
  };
  .data__class, .data__rating{
    font-size: 2rem;
    margin-top: 0.5rem;
  };
`;
const ModalBody = styled.div`
  margin: 3rem 1rem;
  div{
    margin: 1rem 0.5rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const TechModal = ({ show, showOff, data }: PropTypes) => {

  return (
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
        <Paper imageUrl={data.imageUrl}>
          <PaperContainer>
            <ModalHead>
              <div className="data__name">{data.name}</div>
              <div className="data__class">Classification : {data.class}</div>
              <div className="data__rating"> 
              Level : <Rating size="large" value={(data.level)/2} precision={0.1} readOnly />
              </div>
            </ModalHead>
            <hr style={{border: "0.1px gray solid" }}/>
            <ModalBody>
              {data.content.map((content, idx) => {
                return <div key={idx}>
                  - {content}
                </div>
              })}
            </ModalBody>
          </PaperContainer>
        </Paper>
      </Fade>
    </CustomModal>
  );
};
export default React.memo(TechModal);
