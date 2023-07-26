import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;
export const Div = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;