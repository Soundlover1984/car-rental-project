import {Section, Image} from './EmptySection.styled';
import CatalogLink from 'components/CatalogLink/CatalogLink';
import cars from 'assets/vehicles.png';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import car from 'assets/bmw.png';

const EmptySection = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <Section>
      <p style={{ marginTop: '50px' }}>
      Apologies, there doesn't seem to be any content here. Navigate to the catalog to include cars in your favorites.
      </p>
       {/* <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
      <img src={cars} alt="vehicles" style={{ marginTop: '50px' }}/>
      </motion.div> */}
       {isMobile ? (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={car} alt="car" width="100%" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={cars} alt="cars image" width="100%" />
        </motion.div>
      )}
      <CatalogLink text="Catalog" />
    </Section>
  );
};

export default EmptySection;