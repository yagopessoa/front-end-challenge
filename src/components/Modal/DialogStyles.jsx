import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import media from './media';

export const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #717171;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const DialogContainer = styled.div`
  position: fixed;
  pointer-events: ${({ blockNavigation }) => (blockNavigation ? 'unset' : 'none')};
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

DialogContainer.propTypes = {
  blockNavigation: PropTypes.bool,
};

DialogContainer.defaultProps = {
  blockNavigation: true,
};

export const Global = createGlobalStyle`
  body {
    min-width: 100vw;
    ${media.large`
      min-width: calc(100vw - 15px);
    `}
  }
  body.modal-open{
    overflow: hidden;
    position: fixed;
  }
`;
