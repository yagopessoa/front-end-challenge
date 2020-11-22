import { css } from 'styled-components';

export const sizes = {
  small: '576px',
  medium: '768px',
  large: '992px',
  extraLarge: '1200px',
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const getScreenSize = window => {
  if (window) {
    const { innerWidth } = window;
    if (innerWidth) {
      const screenSize = Object.keys(sizes).reduce((prev, next) => {
        if (parseInt(sizes[next].slice(0, -2), 10) <= innerWidth) return next;
        return prev;
      }, 'small');
      return screenSize;
    }
  }
  return null;
};
