import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { Image, ModalContent } from './CarInformation.styled';

const CarInformation = ({ isModalOpen, closeModal, car }) => {
  const {
    model,
    img,
    description,
  } = car;
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <ModalContent>
        <Image src={img} alt={model} width="461" height="248" />
        <p>{description}</p>
        <Link to="tel:+380730000000">Rental car</Link>
      </ModalContent>
    </Modal>
  );
};

export default CarInformation;