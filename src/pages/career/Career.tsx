import styled from "styled-components";
import MainInput from "../../components/MainInput";

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
        </InputGridContainer>
      </MainContainer>
    </>
  );
};

export default Career;

const MainContainer = styled.div`
  margin-top: 200px;
  padding: 0 50px;
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
  width: 340px;
  height: 70px;
  line-height: 1.3;
  font-size: 22px;
  @media (min-width: 999px) {
    font-size: 32px;
    width: 780px;
  }
`;

const InputGridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(1fr);
  place-items: center;
  gap: 30px;

  @media (min-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
