import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 150px;
  padding: 0 70px;

  @media (max-width: 599px) {
    padding: 0 25px;
  }
`;

export const CareerText = styled.h1`
  color: #000814;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 1080px) {
    font-size: 42px;
  }
  @media (max-width: 599px) {
    font-size: 30px;
  }
`;

export const Line = styled.div`
  height: 6px;
  background: #120093;
  margin-bottom: 25px;
`;

export const Paragraph = styled.div`
  max-width: 300px;
  height: 70px;
  line-height: 1.3;
  font-size: 20px;
  @media (min-width: 999px) {
    font-size: 32px;
    max-width: 780px;
  }
`;

export const InputGridContainer = styled.div`
  position: relative;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(1fr);
  place-items: center;
  gap: 30px;

  @media (min-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
    place-items: start;
    column-gap: 50px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #000814;
  padding: 20px 30px;
  cursor: pointer;
  border: none;
  width: 300px;
  border-radius: 4px;
  margin: 25px 0;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  @media (min-width: 1080px) {
    width: 170px;
    padding: 18px 30px;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (min-width: 1080px) {
    align-items: start;
    gap: 15px;
    padding: 30px 70px;
  }
  @media (min-width: 1280px) {
    padding: 30px 150px;
  }
  @media (min-width: 1599px) {
    padding: 30px 180px;
  }
`;

export const Img = styled.img`
  position: absolute;
  right: -60%;
  top: -27%;
  display: none;
  @media (min-width: 1080px) {
    display: block;
    width: 70%;
  }
  @media (min-width: 1280px) {
    top: -47%;
  }
  @media (min-width: 1599px) {
    right: -80%;
    width: 75%;
    top: -70%;
  }
`;

export const StyledInput = styled.div`
  padding: 25px 30px;
  background-color: #e5e7ea;
  border: none;
  width: 240px;
  border-radius: 4px;
  cursor: pointer;

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
`;

export const Error = styled.p`
  font-size: 14px;
  color: red;
`;
