import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Design from "../assets/images/design.png";
import Development from "../assets/images/development.png";
import Delivery from "../assets/images/delivery.png";

interface MainProps {
  scroll: string;
}
export const Home = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setScroll(scrollPosition > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    setScroll(true);
    if (contentRef.current) {
      const windowHeight = window.innerHeight;
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      const scrollPosition = windowHeight;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <Container>
          <h1>
            information technology, consulting, <br /> and outsourcing company
          </h1>
          <svg
            onClick={scrollToBottom}
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            style={{ width: "100%", cursor: "pointer" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 0.166657C8.15088 0.166657 0.166626 8.15091 0.166625 18C0.166625 27.8491 8.15088 35.8333 18 35.8333C27.849 35.8333 35.8333 27.8491 35.8333 18C35.8333 8.15091 27.849 0.166658 18 0.166657ZM2.49996 18C2.49996 9.43958 9.43955 2.49999 18 2.49999C26.5604 2.49999 33.5 9.43958 33.5 18C33.5 26.5604 26.5604 33.5 18 33.5C9.43954 33.5 2.49996 26.5604 2.49996 18Z"
              fill="#222628"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.3862 15.4662C10.9073 15.8972 10.8685 16.6349 11.2995 17.1138L12.1667 16.3333L13.0339 15.5529C12.6028 15.0739 11.8651 15.0351 11.3862 15.4662ZM23.8333 16.3333L22.9661 15.5529L22.9085 15.6168L22.7425 15.8001C22.599 15.9584 22.393 16.1847 22.1439 16.4564C21.6453 17.0004 20.9759 17.7241 20.2896 18.4465C19.6007 19.1717 18.9057 19.884 18.353 20.4104C18.2232 20.534 18.1052 20.6435 18 20.7382C17.8948 20.6435 17.7768 20.534 17.6471 20.4104C17.0943 19.884 16.3994 19.1717 15.7104 18.4465C15.0241 17.7241 14.3547 17.0004 13.8561 16.4564C13.607 16.1847 13.401 15.9584 13.2575 15.8001L13.0915 15.6168L13.0339 15.5529L12.1667 16.3333L11.2995 17.1138L11.36 17.1809L11.5293 17.3678C11.6751 17.5286 11.8839 17.758 12.1361 18.0331C12.6401 18.583 13.3196 19.3176 14.0188 20.0535C14.7152 20.7867 15.4422 21.5327 16.0379 22.1C16.3332 22.3813 16.6145 22.6362 16.8531 22.827C16.9702 22.9207 17.1012 23.0186 17.2337 23.0989C17.2999 23.139 17.3881 23.1881 17.4911 23.2301C17.5785 23.2658 17.7635 23.3333 18 23.3333C18.2365 23.3333 18.4215 23.2658 18.5089 23.2301C18.6119 23.1881 18.7002 23.139 18.7663 23.0989C18.8989 23.0186 19.0299 22.9207 19.147 22.827C19.3855 22.6362 19.6668 22.3813 19.9622 22.1C20.5579 21.5327 21.2848 20.7867 21.9813 20.0535C22.6804 19.3176 23.3599 18.583 23.8639 18.0331C24.1161 17.758 24.3249 17.5286 24.4707 17.3678L24.64 17.1809L24.6994 17.115L23.8333 16.3333ZM23.8333 16.3333L22.9661 15.5529C23.3972 15.074 24.1349 15.0351 24.6138 15.4662C25.0927 15.8972 25.1316 16.6349 24.7005 17.1138L23.8333 16.3333Z"
              fill="#222628"
            />
          </svg>
        </Container>
      </div>

      <Content ref={contentRef} scroll={scroll.toString()}>
        <AboutUs>
          <AboutText>ABOUT US</AboutText>
          <Line></Line>
          <AboutLittleText>
            Our company has ultimate experience building custom software
            solutions for financial and non financial institutions Established
            in the year 2000, ATMS (form FNXCo Holding Silver Label) is a global
            information technology, consulting and outsourcing company. <br />{" "}
            <br />
            We have pioneered ourselves in providing end-to-end solutions and
            services in the areas of information technology, consulting and
            outsourcing in various segments of industry like agriculture,
            education, finance, healthcare, life sciences, hotel/hospitality,
            media and entertainment, and more.
          </AboutLittleText>
          <Button>Learn more</Button>
        </AboutUs>

        <Services>
          <AboutText>SERVICES</AboutText>
          <Line></Line>
          <RectangleDiv style={{ display: "flex" }}>
            <div>
              <img src={Design} />
              <p>UI/UX design</p>
            </div>
            <div>
              <img src={Development} />
              <p>software development</p>
            </div>
            <div>
              <img src={Delivery} />
              <p>managed delivery</p>
            </div>
          </RectangleDiv>
        </Services>
      </Content>
    </div>
  );
};
const RectangleDiv = styled.div`
  display: "flex";
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 29px;
  @media (min-width: 1025px) {
    gap: 0;
  }
  div {
    width: 279px;
    height: 144px;
    border-radius: 21px;
    border: 2px solid #bbb;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1025px) {
      width: 368px;
      height: 160px;
      margin: 0;
    }
    p {
      font-size: 25px;
      margin-top: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      @media (min-width: 1025px) {
        font-size: 34px;
      }
    }
    img {
      width: 56px;
      height: 56px;
    }
  }
`;

const Services = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 126px;
`;

const Button = styled.button`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: white;
  margin-top: 40px;
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid #000814;
  cursor: pointer;
  @media (min-width: 1025px) {
    padding: 8px 24px;
    font-size: 24px;
  }
`;
const AboutLittleText = styled.p`
  color: #000;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;
const AboutText = styled.h1`
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: #000814;
  @media (min-width: 1025px) {
    font-size: 64px;
  }
`;
const AboutUs = styled.div`
  width: 90%;
  margin: auto;
`;
const Line = styled.div`
  height: 6px;
  background: #120093;
  margin-bottom: 15px;
  @media (min-width: 1025px) {
    margin-bottom: 42px;
  }
`;

const Content = styled.div<MainProps>`
  position: absolute;
  top: 110%;
  transition: max-height 0.5s ease-in-out;
  @media (min-width: 1025px) {
    top: 120%;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  margin-top: 80px;
  @media (min-width: 1025px) {
    font-size: 64px;
    margin-top: 280px;
  }
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    color: #7f8389;
    z-index: 555;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 100px;
    @media (min-width: 1025px) {
      font-size: 64px;
    }
  }
`;
