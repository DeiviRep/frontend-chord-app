import styled from 'styled-components';
// import { styled } from '@mui/system';
import { Button } from '@mui/material';

// Define los estilos utilizando CSS-in-JS
export const Div = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
`;
// Define un componente estilizado utilizando Emotion
export const StyledButton = styled(Button)`
  background-color: red;
  color: white;
`;

export const StyledButton2 = styled(Button)`
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
  color: white;
`;

export const baseStyles = `
  background-color: red;
  color: white;
`;

export const StyledButton3 = styled(Button)`
  ${(props) => (props.primary ? `background-color: blue;` : '')}
  ${baseStyles}
`;