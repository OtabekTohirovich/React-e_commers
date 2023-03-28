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

export const BtnCostum = styled.div`
  width: 100px;
  height: 28px;
  padding: 4px 0 0 13px;
  border: 2px solid #9ae6b4;
  border-radius: 10px;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:hover {
    background-color: #fff !Important;
  }
`;

export const CardIcon = styled.span`
  font-size: 22px;
  color: var(--orange);
`;


export const WrapperAmount = styled.div`
  display: flex;
  border: 0.1px solid #c8c2c2;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 1px;
  border-radius: 4px;
  width: 80px;
  font-size: 12px;
  margin: 0px 10px 0px 10px;
`;
export const BtnAmount = styled.span`
  cursor: pointer;
  border: none;
  padding: 0px 2px;
  height: 100%;
  width: 36px;
  background-color: transparent;
`;
export const InputAmount = styled.input`
  outline: none;
  width: 100%;
  text-align: center;
  border: none;
  padding-top: 4px;
`;