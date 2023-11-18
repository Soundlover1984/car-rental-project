import {Section, Button } from './EmptySection.styled';

const EmptySection = () => {
  return (
    <Section>
      <p>
      Apologies, there doesn't seem to be any content here. Navigate to the catalog to include cars in your favorites.
      </p>
      <Button to="/catalog">Catalog</Button>
    </Section>
  );
};

export default EmptySection;