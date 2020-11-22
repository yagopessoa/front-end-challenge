import PropTypes from 'prop-types';

import { ButtonBase } from './styles';

function Button({ children, circle, large, ...props }) {
  return (
    <ButtonBase circle={circle} large={large} {...props}>
      {children}
    </ButtonBase>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  large: PropTypes.bool,
};

Button.defaultProps = {
  children: <div />,
  circle: false,
  large: false,
};

export default Button;
