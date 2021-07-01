const size = {
  mobile: "767px",
  tablet: "1023px",
  laptop: "1278px",
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.mobile+1}) and (max-width: ${size.tablet})`,
  laptop: `(min-width: ${size.tablet+1}) and (max-width: ${size.laptop})`,
  desktop: `(min-width: ${size.laptop+1})`
}
export default theme;