import { Button } from './ContactButton.styled';

const ContactButton = ({ text }) => {
  return <Button to="tel:+380730000000">{text}</Button>;
};

export default ContactButton;