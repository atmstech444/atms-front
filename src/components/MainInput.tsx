import styled from "styled-components";

interface InputProps {
  type: any;
  id: string;
  name: string;
  label: string;
  placeholder: string;
}

const MainInput = ({ type, id, name, label, placeholder }: InputProps) => {
  return (
    <>
      <InputDiv>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} id={id} name={name} />
      </InputDiv>
    </>
  );
};

export default MainInput;

const Input = styled.input`
  padding: 25px 30px;
  background-color: #e5e7ea;
  border: none;
  width: 250px;
  border-radius: 4px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;
