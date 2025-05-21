import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 20%;
  height: auto;
  border-radius: 10px;
  padding-top: 10px;
`;
export const LogoImg = styled.img`
    width: 80px;
    height: 50px;
    margin-bottom: 20px;
    `;

export const FormStyle = styled.form`
   margin: 0 auto;
`;

export const FieldWrapper = styled.div`
  position: relative; 
  width: 100%;
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  width: 80%;
  height: 20px;
  padding: 8px 8px 8px 36px; /* left padding for icon */
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #f8f9fa;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const IconImg = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  pointer-events: none; /* allows clicking through the icon */
`;
