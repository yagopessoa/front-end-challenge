import PropTypes from 'prop-types';

import { Modal } from '../Modal';
import TextInput from '../TextInput';
import Button from '../Button';
import { Container, Title, Content, ButtonsRow } from './styles';

function TextInputDialog({
  title,
  show,
  textValue,
  onTextChange,
  onCancel,
  onConfirm,
}) {
  return (
    <Modal elementId="root" show={show} onLeaved={onCancel}>
      <Container>
        <Title>{title}</Title>
        <Content>
          <TextInput value={textValue} onChange={onTextChange} />
        </Content>
        <ButtonsRow>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={onConfirm}>Confirmar</Button>
        </ButtonsRow>
      </Container>
    </Modal>
  );
}

TextInputDialog.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  textValue: PropTypes.string,
  onTextChange: PropTypes.func,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};

TextInputDialog.defaultProps = {
  title: 'Title',
  show: false,
  textValue: '',
  onTextChange: () => {},
  onCancel: () => {},
  onConfirm: () => {},
};

export default TextInputDialog;
