import { ReactComponent as Pawprint } from 'images/icons/pawprint.svg';
import Button from '../Button/Button';
import { Section, Header } from '../ApproveAction/ApproveAction.styled';
import { Text } from './ModalCongrats.styled';

const ModalCongrats = ({ toggleModal }) => {
  return (
    <Section>
      <Header style={{ margin: 0 }}>Congrats!</Header>
      <Text>Your registration is successful</Text>
      <Button
        type="button"
        text="Go to profile"
        filled
        clickHandler={toggleModal}
        icon={<Pawprint />}
      ></Button>
    </Section>
  );
};

export default ModalCongrats;
