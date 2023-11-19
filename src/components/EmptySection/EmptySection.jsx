import {Section} from './EmptySection.styled';
import CatalogLink from 'components/CatalogLink/CatalogLink';
import cars from 'assets/vehicles.png';

const EmptySection = () => {
  return (
    <Section>
      <p style={{ marginTop: '50px' }}>
      Apologies, there doesn't seem to be any content here. Navigate to the catalog to include cars in your favorites.
      </p>
      <img src={cars} alt="vehicles" style={{ marginTop: '50px' }}/>
      <CatalogLink text="Catalog" />
    </Section>
  );
};

export default EmptySection;