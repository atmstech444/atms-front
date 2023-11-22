import styled from "styled-components";

export const Header = styled.div`
  background-color: #000814;
  padding: 18% 24px 0 24px;
  @media (min-width: 678px) {
    padding: 10% 24px 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 10% 72px 0 72px;
  }
`;
export const MainContainer = styled.div`
  padding: 0 100px;
  max-width: 1440px;
  @media (max-width: 599px) {
    padding: 0 25px;
  }
`;

export const CareerText = styled.h1`
  color: #fff;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  font-family: Bebas Neue;
  padding-left: 230px;

  @media (max-width: 1080px) {
    font-size: 42px;
  }
  @media (max-width: 599px) {
    font-size: 30px;
  }
  @media (max-width: 1450px) {
    padding-left: 20px;
  }
  @media (max-width: 1630px) {
    padding-left: 50px;
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
  font-family: Electrolize;
  @media (min-width: 599px) {
    max-width: 500px;
  }
  @media (min-width: 899px) {
    font-size: 32px;
    max-width: 780px;
    margin-bottom: 50px;
  }
  @media (min-width: 1540px) {
    padding-left: 160px;
  }
  @media (min-width: 1799px) {
    padding-left: 200px;
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
  font-family: Electrolize;
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
    padding: 30px 0;
  }
  @media (min-width: 1280px) {
    padding: 30px 80px;
  }
  @media (min-width: 1799px) {
    padding: 30px 250px;
  }
`;

export const Img = styled.img`
  display: none;
  @media (min-width: 1080px) {
    display: block;
    width: 60%;
    position: absolute;
    right: -50%;
    top: -27%;
  }
  @media (min-width: 1250px) {
    top: -35%;
    right: -60%;
  }
  @media (min-width: 1599px) {
    right: -70%;
    top: -50%;
    width: 70%;
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
  font-family: Electrolize;
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

export const Error = styled.p`
  font-size: 14px;
  color: red;
`;
