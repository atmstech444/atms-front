import styled from "styled-components";
import MainInput from "../../components/MainInput";
import icon from "../../assets/images/search.svg";

const Career = () => {
  return (
    <>
      <MainContainer>
        <CareerText>Career</CareerText>
        <Line></Line>
        <Paragraph>
          Your next career move might be just around the corner – let's make it
          happen together!"
        </Paragraph>
        <Form>
          <InputGridContainer>
            <MainInput
              type="text"
              id="name"
              name="name"
              placeholder="name"
              label="Name"
            />
            <MainInput
              type="text"
              id="name"
              name="name"
              placeholder="name"
              label="Name"
            />
            <MainInput
              type="text"
              id="name"
              name="name"
              placeholder="name"
              label="Name"
            />
            <MainInput
              type="text"
              id="name"
              name="name"
              placeholder="name"
              label="Name"
            />
            <Img src={icon} alt="icon" />
          </InputGridContainer>
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default Career;

const MainContainer = styled.div`
  margin-top: 150px;
  padding: 0 70px;

  @media (max-width: 599px) {
    padding: 0 25px;
  }
`;

const CareerText = styled.h1`
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

const Line = styled.div`
  height: 6px;
  background: #120093;
  margin-bottom: 25px;
`;

const Paragraph = styled.div`
  max-width: 300px;
  height: 70px;
  line-height: 1.3;
  font-size: 20px;
  @media (min-width: 999px) {
    font-size: 32px;
    max-width: 780px;
  }
`;

const InputGridContainer = styled.div`
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

const SubmitButton = styled.button`
  background-color: #000814;
  padding: 20px 30px;
  cursor: pointer;
  border: none;
  width: 300px;
  border-radius: 4px;
  margin: 25px 0;
  color: #fff;
  font-size: 16px;

  @media (min-width: 1080px) {
    width: 170px;
    padding: 18px 30px;
  }
`;

const Form = styled.form`
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

const Img = styled.img`
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
