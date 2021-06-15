import profileImage from "../../public/images/profile_image.jpg";
import styled from "styled-components";

const Image = styled.img`
  width: 50%;
  object-fit: contain;
  border-radius: 10%;
`;

const ProfileImage = () => {
  
  return(
    <Image 
      src={profileImage}
      alt="Profile Image"
    /> 
  )
}
export default ProfileImage;