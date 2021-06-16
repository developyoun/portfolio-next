import { PropsType } from "../../pages/index"

import profileImage from "../../public/images/profile_image.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 50%;
  object-fit: contain;
  border-radius: 10%;
`;

const ProfileImage = ({flip}: PropsType) => {
  
  console.log(flip)
  return(
    <button onClick={flip}>
        <Image
          src={profileImage}
          alt="Profile Image"
        /> 
    </button>
  )
}
export default ProfileImage;