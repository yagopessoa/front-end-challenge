import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CheckBox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  cursor: pointer;
`;

export const TodoTitle = styled.label`
  padding: 8px;
  cursor: pointer;

  ${({ checked }) =>
    checked &&
    css`
      color: #bdbdbd;
      text-decoration: line-through;
    `}
`;

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
  float: right;

  & > button {
    margin: 0 4px;
  }
`;
