import OpenModalButton from 'components/OpenModalButton/OpenModalButton';

import {
  Details,
  Icon,
  IconFavorite,
  IconWrapper,
  Image,
  ImageWrapper,
  Separator,
  Span,
  TitleWrapper,
  Wrapper,
} from './CarDetails.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCarById } from 'redux/carsOperations';
import CarInformation from 'components/CarInformation/CarInformation';
import { addFavorite, removeFavorite } from 'redux/favoriteSlice';


const CarDetails = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    const newCar = dispatch(getCarById(car.id));
    console.log(newCar);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];

  const handleToFavorite = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      dispatch(removeFavorite(car));
    } else {
      dispatch(addFavorite(car));
    }
  };


  return (
    <Wrapper>
      <ImageWrapper onClick={openModal}>
        <IconWrapper onClick={handleToFavorite}>
          {isFavorite ? (
            <IconFavorite width={18} height={18} />
          ) : (
            <Icon width={18} height={18} />
          )}
        </IconWrapper>
        <Image src={img} alt={model} width="274" height="268" />
      </ImageWrapper>
      <TitleWrapper>
        <p>
          {make} <Span>{model}</Span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </TitleWrapper>
      <Details>
        {city} <Separator> | </Separator>
        {country} <Separator> | </Separator> {rentalCompany}
      </Details>
      <Details>
        {type} <Separator> | </Separator> {model} <Separator> | </Separator>{' '}
        {id}
        <Separator> | </Separator> {functionalities[0]}
      </Details>
      <OpenModalButton car={car} onClick={openModal} />
      {isModalOpen && (
        <CarInformation
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          car={car}
        />
      )}
    </Wrapper>
  );
};

export default CarDetails;