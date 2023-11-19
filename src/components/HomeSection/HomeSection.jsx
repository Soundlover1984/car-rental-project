const { HomeSectionStyle } = require('./HomeSection.styled');

const HomeSection = ({ children }) => {
  return <HomeSectionStyle>{children}</HomeSectionStyle>;
};

export default HomeSection;