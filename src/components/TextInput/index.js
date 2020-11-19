import PropTypes from 'prop-types';

import { Input } from './styles';

function TextInput({ value, onChange }) {
  const internalOnChange = event => onChange(event.target.value);

  return <Input value={value} onChange={internalOnChange} />;
}

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  value: '',
  onChange: () => {},
};

export default TextInput;
