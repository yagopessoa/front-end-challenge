import styled, { css } from 'styled-components';
import RawCloseIcon from './CloseIcon';

export const RawCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: inline-block;
  position: relative;
  margin: 8px 25px 16px 0;
  height: ${props => (props.height ? props.height : 'unset')};
  margin-right: 0px;
  width: 100%;

  @media (min-width: 576px) {
    margin-right: 0px;
    width: 100%;
  }
  @media (min-width: 768px) {
    margin-right: 0px;
    width: 100%;
  }
  @media (min-width: 992px) {
    margin-right: 25px;
    width: ${props => (props.width ? props.width : 'unset')};
  }
  @media (min-width: 1200px) {
    margin-right: 25px;
    width: ${props => (props.width ? props.width : 'unset')};
  }
`;

export const Card = styled(RawCard)`
  position: relative;
  ${({ fullscreen }) =>
    fullscreen
      ? css`
          height: 100vh !important;
          width: 100vw !important;
        `
      : css`
          max-width: 80vw;
          max-height: 80vh;
          min-width: 10vw;
          min-height: 10vh;
          height: unset;
        `}
  overflow: ${props => (props.overflow ? props.overflow : 'unset')};
  border-radius: 4px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  margin: 0px !important;
`;

export const CardHeader = styled.div`
  padding: 16px 24px;
  white-space: nowrap;
  font-family: inherit;
  font-size: 20px;
  font-weight: bold;
  text-align: ${props => props.labelAlign};
  color: #717171;
  border-bottom: 1px solid #e6e6e6;
`;

export const CloseIcon = styled(RawCloseIcon)`
  width: 23px;
  height: 23px;
  fill: #717171;
`;

export const CloseButton = styled.div`
  position: absolute;
  padding: ${props => props.closeButtonPadding};
  top: 0;
  right: 0;
  cursor: pointer;
`;
