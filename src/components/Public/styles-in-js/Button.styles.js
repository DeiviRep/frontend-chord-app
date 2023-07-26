import styled from 'styled-components';

// Define los estilos utilizando CSS-in-JS
export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;