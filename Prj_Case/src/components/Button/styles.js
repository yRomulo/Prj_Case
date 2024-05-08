import styled from "styled-components";

export const Container = styled.button`
  margin-top: 16px;
  width: fit-content;
  height: 26px;
  
  border-radius: 8px;
  border: none;
  padding: 6px 12px 6px 12px;
  color: white;
  font-size: 12px;

  &.Remover {
    background-color: darkred;
  }
  &.Editar {
    background-color: #2F3640;
  }
  
  &.Salvar {
    background-color: green;
  }
  &.Cancelar {
    background-color: darkred;
  }
  
`;
