import PropTypes from 'prop-types';

import { Container } from './styles';

function Title({ children }) {
  return <Container>{children}</Container>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Title.defaultProps = {
  children: '',
};

export default Title;
