import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ButtonStyled = styled.button`
  color: #7b77fc;
  background: #ffffff;
  border: 1px solid #7b77fc;
  width: 107px;
  height: 38px;
  border-radius: 10px;
  outline: none;
  &:hover {
    background: #7b77fc;
    color: #ffffff;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
