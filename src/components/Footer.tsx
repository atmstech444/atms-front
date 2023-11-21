import { AboutText, Line } from "../pages/Home";
import styled from "styled-components";
import Message from "../assets/icons/Message.svg";
import Location from "../assets/icons/Location.svg";
import Email from "../assets/icons/Call.svg";
import { Label } from "./MainInput";

export default function Footer() {
  return (
    <Main>
      <AboutText>Contact us</AboutText>
      <Line></Line>
      <Div>
        <Container>
          <Cont>
            <img src={Location} />
            <p>Gamrekeli 19, Tbilisi, Georgia</p>
          </Cont>
          <Cont>
            <img src={Email} />
            <p>+995322040040</p>
          </Cont>
          <Cont>
            <img src={Message} />
            <p>business@atms.ge</p>
          </Cont>
        </Container>

        <Contact>
          <NameEmail>
            <InputDiv>
              <Label>Name</Label>
              <input placeholder="Name" />
            </InputDiv>
            <InputDiv>
              <Label>Email</Label>
              <input placeholder="Email" />
            </InputDiv>
          </NameEmail>
          <MessageText>
            <Label>Message</Label>
            <Input placeholder="Write your message..." />
          </MessageText>
          <SubmitButton>Submit</SubmitButton>
        </Contact>
      </Div>
    </Main>
  );
}
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  @media (min-width: 1080px) {
    width: 45%;
  }
`;

const Div = styled.div`
  @media (min-width: 1080px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Contact = styled.div`
  @media (min-width: 678px) {
    width: 50%;
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
  font-family: Electrolize;
  transition: all 0.3s ease-in-out;
  @media (min-width: 1080px) {
    width: 170px;
    padding: 18px 30px;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
const Input = styled.input`
  height: 160px;
  padding: 12px 16px;
  border-radius: 4px;
  background: #e5e7ea;
  font-family: Electrolize;
  width: 90%;
  border: none;
  margin-top: 16px;
`;

const NameEmail = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1080px) {
    flex-direction: row;
    gap: 32px;
  }
  input {
    border-radius: 4px;
    background: #e5e7ea;
    padding: 12px 16px;
    font-family: Electrolize;
    border: none;
    width: 90%;
    margin: 16px 0;
  }
`;

const Cont = styled.div`
  display: flex;
  gap: 24px;
  p {
    font-family: Electrolize;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    @media (min-width: 1080px) {
      font-size: 24px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  @media (min-width: 1080px) {
    margin-top: 32px;
  }
`;
const Main = styled.div`
  padding: 24px;
  @media (min-width: 1080px) {
    padding: 24px 72px;
  }
`;
