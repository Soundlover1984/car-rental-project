const { Button } = require('./CatalogLink.styled');

const CatalogLink = ({ text }) => {
  return <Button to="/catalog">{text}</Button>;
};

export default CatalogLink;