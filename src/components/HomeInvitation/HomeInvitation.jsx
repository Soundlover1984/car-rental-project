import pic from 'assets/rental-cars.png';
import CatalogLink from 'components/CatalogLink/CatalogLink';
import { Text, TextWrapper, Image } from './HomeInvitation.styled';

const HomeInvitation = () => {
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
      <Image src={pic} alt="default cars image" width="100%" />
    </>
  );
};

export default HomeInvitation;