import OpenModalButton from 'components/OpenModalButton/OpenModalButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { getCarById } from 'redux/carsOperations';
import CarInformation from 'components/CarInformation/CarInformation';
import { addFavorite, removeFavorite } from 'redux/favoriteSlice';
import { selectFavorite } from 'redux/selectors';


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
  const { favoriteCars } = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const companyAddress = address.split(',');
  const country = companyAddress[2];
  const city = companyAddress[1];

  useEffect(() => {
    if (favoriteCars.some(favCar => favCar.id === car.id)) {
      setIsFavorite(true);
    }
  }, [favoriteCars, car]);

  const openModal = () => {
    setIsModalOpen(true);
    dispatch(getCarById(car.id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleToFavorite = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);

    if (favoriteCars.some(favCar => favCar.id === car.id)) {
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
            <IconFavorite width={20} height={20} />
          ) : (
            <Icon width={20} height={20} />
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