import styled from 'styled-components';

export const ButtonBase = styled.button`
  height: ${({ large }) => (large ? '54px' : '40px')};
  background-color: rgba(0, 157, 255, 1);
  color: white;
  box-shadow: 0px 2px 6px #23272FA3;
  border: 0px;
  border-radius: ${({ circle }) => (circle ? '100%' : '8px')};
  cursor: pointer;
  padding: ${({ large }) => (large ? '0 16px' : '0 13px')};
  font-size: ${({ large }) => (large ? '20px' : '16px')};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  position: relative;
  overflow: hidden;

  svg {
    fill: white;
    color: white;
    height: ${({ large }) => (large ? '24px' : '16px')};
    width: ${({ large }) => (large ? '24px' : '16px')};
  }

  &:focus { outline:0; }
  &::-moz-focus-inner { border: 0; }

  &:disabled {
    opacity: 0.38;
    cursor: default;
    pointer-events: none;
  }

  &:active {
    background-color: rgba(0, 157, 255, 0.67);
    box-shadow: 0px 0px 0px;
  }
`;
