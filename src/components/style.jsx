import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  max-width: 320px;
  padding: 20px;
`;
export const Label = styled.label`
  position: relative;
  margin: 0px 0px 30px;
  z-index: 0;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--main-dark);
  &:last-child {
    justify-content: space-between;
    border-bottom: none;
  }
`;
export const FormWreapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const Input = styled.input`
  width: 100%;
  height: 28px;
  padding: 10px;
  border: 2px solid;
  border-radius: 10px;
  outline: none;
  z-index: 2;
  height: 35px;
  &::placeholder {
    opacity: 0.5;
  }
`;

