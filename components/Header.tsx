import Link from "next/link";
import theme from "../styles/theme";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


import { useMediaQuery } from "@material-ui/core";

const Header = () => {
  const isMobile = useMediaQuery(theme.mobile);
  return (
    <>
      { isMobile ? 
        <MobileHeader /> :
        <DesktopHeader />
      }
    </>
  );
};
export default Header;
