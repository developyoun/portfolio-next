import { PropsType } from "../../pages/index";

import profileImage from "../../public/images/profile_image.jpg";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  margin: 0 auto;
  height: 100%;
  border-radius: 10%;
  box-shadow: 3px 3px 3px #000;

  cursor: pointer;
`;

const ProfileImage = ({ flip }: PropsType) => {
  return(
    <Image 
      src={profileImage} 
      alt="Profile Image" 
      onClick={flip} 
    />
  ) 
};
export default ProfileImage;
