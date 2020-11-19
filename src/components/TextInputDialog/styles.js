import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: medium;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
`;

export const ButtonsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > button:not(:last-child) {
    margin-right: 16px;
  }
`;
