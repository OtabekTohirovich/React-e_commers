import styled from "styled-components";

// export const Form = styled.form`
//   width: 100%;
//   max-width: 320px;
//   padding: 20px;
// `;

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
    background-color: #fff !important;
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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const UploadImg = styled.div`
  width: 50%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImgWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  object-fit: cover;
  border: 1px dashed;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  visibility: hidden;
`;
export const InputFile = styled.input`
  display: none;
`;

export const LabelFile = styled.label`
  text-align: center;
`;

export const InputItem = styled.div`
width: 100%;
margin-bottom: 20px;

`

export const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-size: 15px;
font-weight: bold;
color: #05060fd3;
`;

export const Select = styled.select`
  width: 100%;
  height: 44px;
  background-color: #dedbdbad;
  border-radius: 0.5rem;
  padding: 0 1rem;
  border: 2px solid transparent;
  font-size: 1rem;
  outline: none;
`;