import { AboutText, Line } from "../pages/Home";
import styled from "styled-components";
import Message from "../assets/icons/Message.svg";
import Location from "../assets/icons/Location.svg";
import Email from "../assets/icons/Call.svg";
import { Label } from "./MainInput";
import LogoWhite from "../assets/images/logoWhite.png";
import { useState } from "react";
import axios from "axios";

export default function Footer() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const onSubmit = async () => {
    try {
      const response = await axios.post("https://atms.ge/contact.php", data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <footer id="footer" style={{ backgroundColor: "white" }}>
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
                <input
                  placeholder="Name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </InputDiv>
              <InputDiv>
                <Label>Email</Label>
                <input
                  placeholder="Email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </InputDiv>
            </NameEmail>
            <MessageText>
              <Label>Message</Label>
              <Input
                placeholder="Write your message..."
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
            </MessageText>
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
          </Contact>
        </Div>
      </Main>
      <Grey>
        <GreyDiv>
          <img src={LogoWhite} />
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M12.8333 10.4999H15.1666C15.476 10.4999 15.7728 10.6228 15.9915 10.8416C16.2103 11.0604 16.3333 11.3572 16.3333 11.6666C16.3333 11.976 16.4562 12.2727 16.675 12.4915C16.8938 12.7103 17.1905 12.8333 17.4999 12.8333C17.8093 12.8333 18.1061 12.7103 18.3249 12.4915C18.5437 12.2727 18.6666 11.976 18.6666 11.6666C18.6666 10.7383 18.2978 9.84809 17.6415 9.19171C16.9851 8.53533 16.0948 8.16658 15.1666 8.16658H12.8333C11.905 8.16658 11.0148 8.53533 10.3584 9.19171C9.70201 9.84809 9.33326 10.7383 9.33326 11.6666V16.3333C9.33326 17.2615 9.70201 18.1517 10.3584 18.8081C11.0148 19.4645 11.905 19.8333 12.8333 19.8333H15.1666C16.0948 19.8333 16.9851 19.4645 17.6415 18.8081C18.2978 18.1517 18.6666 17.2615 18.6666 16.3333C18.6666 16.0238 18.5437 15.7271 18.3249 15.5083C18.1061 15.2895 17.8093 15.1666 17.4999 15.1666C17.1905 15.1666 16.8938 15.2895 16.675 15.5083C16.4562 15.7271 16.3333 16.0238 16.3333 16.3333C16.3333 16.6427 16.2103 16.9394 15.9915 17.1582C15.7728 17.377 15.476 17.4999 15.1666 17.4999H12.8333C12.5238 17.4999 12.2271 17.377 12.0083 17.1582C11.7895 16.9394 11.6666 16.6427 11.6666 16.3333V11.6666C11.6666 11.3572 11.7895 11.0604 12.0083 10.8416C12.2271 10.6228 12.5238 10.4999 12.8333 10.4999ZM13.9999 2.33325C11.6925 2.33325 9.43684 3.01749 7.51827 4.29944C5.5997 5.58139 4.10435 7.40347 3.22133 9.53528C2.33831 11.6671 2.10727 14.0129 2.55743 16.276C3.00759 18.5391 4.11873 20.6179 5.75034 22.2495C7.38196 23.8811 9.46076 24.9923 11.7239 25.4424C13.987 25.8926 16.3328 25.6615 18.4646 24.7785C20.5964 23.8955 22.4185 22.4001 23.7004 20.4816C24.9823 18.563 25.6666 16.3074 25.6666 13.9999C25.6666 12.4678 25.3648 10.9507 24.7785 9.53528C24.1922 8.11981 23.3329 6.83369 22.2495 5.75034C21.1662 4.66699 19.88 3.80763 18.4646 3.22132C17.0491 2.63502 15.532 2.33325 13.9999 2.33325ZM13.9999 23.3333C12.154 23.3333 10.3495 22.7859 8.8146 21.7603C7.27974 20.7347 6.08347 19.2771 5.37705 17.5716C4.67063 15.8662 4.4858 13.9896 4.84593 12.1791C5.20606 10.3686 6.09497 8.70555 7.40026 7.40026C8.70555 6.09497 10.3686 5.20605 12.1791 4.84592C13.9896 4.48579 15.8662 4.67063 17.5716 5.37704C19.2771 6.08346 20.7347 7.27974 21.7603 8.8146C22.7859 10.3495 23.3333 12.154 23.3333 13.9999C23.3333 16.4753 22.3499 18.8492 20.5996 20.5996C18.8492 22.3499 16.4753 23.3333 13.9999 23.3333Z"
                fill="#ECF0F4"
              />
            </svg>
            <p>2023 all rights reserved</p>
          </div>
          <p>Privacy Policy</p>
        </GreyDiv>
      </Grey>
    </footer>
  );
}

const GreyDiv = styled.div`
  display: flex;
  padding: 20px 72px;
  flex-direction: column;
  gap: 25px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  @media (min-width: 1080px) {
    flex-direction: row;
    max-width: 1440px;
  }
`;
const Grey = styled.div`
  background-color: #333943;

  @media (min-width: 1080px) {
    flex-direction: row;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: white;
    font-family: Electrolize;
    @media (min-width: 1080px) {
      font-size: 24px;
    }
  }
  div {
    display: flex;
    gap: 10px;
  }
  img {
    width: 242px;
  }
`;
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
    max-width: 1440px;
    margin: auto;
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
const Input = styled.textarea`
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
  width: 90%;
  margin: auto;
  margin-top: 126px;
  @media (min-width: 1080px) {
    max-width: 1440px;
  }
`;
