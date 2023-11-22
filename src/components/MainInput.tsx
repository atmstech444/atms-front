import styled from "styled-components";
import { useFormContext } from "react-hook-form";

interface InputProps {
  type: any;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
}

const MainInput = ({
  type,
  id,
  name,
  label,
  placeholder,
  error,
}: InputProps) => {
  const { register } = useFormContext();
  return (
    <>
      <InputDiv>
        <Label>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          id={id}
          {...register(name)}
          name={name}
        />
        <Error>{error}</Error>
      </InputDiv>
    </>
  );
};

export default MainInput;

const Input = styled.input`
  padding: 25px 30px;
  background-color: #e5e7ea;
  border: none;
  width: 240px;
  border-radius: 4px;
  font-family: Electrolize;

  @media (min-width: 1440px) {
    width: 300px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  font-family: Electrolize;
`;

const Error = styled.p`
  font-size: 14px;
  color: red;
  font-family: Electrolize;
`;
