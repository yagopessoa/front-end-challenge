import styled from 'styled-components';

const PRIMARY = '#009dff';
const WHITE = '#ffffff';
const BLACK = '#212121';
const GREY = '#cdd7df';

export const hexToRgb = (hex, opacity = 1) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}, ${opacity})`
    : hex;
};

export const Input = styled.input.attrs(() => ({ type: 'text' }))`
  width: 100%;
  height: 44px;
  background: ${WHITE};
  border: ${GREY} solid 1px;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: ${hexToRgb(BLACK, 0.85)};
  padding: 12px;

  :hover,
  :focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${hexToRgb(PRIMARY, 0.3)};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${hexToRgb(BLACK, 0.45)};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${hexToRgb(BLACK, 0.45)};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${hexToRgb(BLACK, 0.45)};
  }
`;
