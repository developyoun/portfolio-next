const size = {
  mobile: {
    max: "767px",
  },
  tablet: {
    min: "768px",
    max: "1023px"
  },
  laptop: {
    min: "1024px",
    max: "1279px"
  },
  desktop: {
    min: "1280px",
  }
};

const theme = {
  mobile: `(max-width: ${size.mobile.max})`,
  tablet: `(min-width: ${size.tablet.min}) and (max-width: ${size.tablet.max})`,
  laptop: `(min-width: ${size.tablet.min}) and (max-width: ${size.laptop.max})`,
  desktop: `(min-width: ${size.desktop.min})`
}
export default theme;