import pic from 'assets/rental-cars.png';
import mpic from 'assets/vw.png'
import CatalogLink from 'components/CatalogLink/CatalogLink';
import { motion } from 'framer-motion';
import { Text, TextWrapper, Image } from './HomeInvitation.styled';
import ContactButton from 'components/ContactButton/ContactButton';
import { useMediaQuery } from 'react-responsive';

const HomeInvitation = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  return (
    <>
      <Text>
      Are you in search of a vehicle for either travel or work purposes? 
      Our service is prepared to offer you the finest array of vehicles tailored to meet your specific requirements.
      </Text>
      <TextWrapper>
        <Text>
      Experience a journey that is both comfortable and unforgettable through our rental service. 
      Begin your exploration with us today!
        </Text>
        <CatalogLink text="Start now" />
      </TextWrapper>
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={mpic} alt="car" width="100%" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.15 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image src={pic} alt="cars image" width="100%" />
        </motion.div>
      )}
      <ContactButton text="Contact us" />
    </>
  );
};

export default HomeInvitation;