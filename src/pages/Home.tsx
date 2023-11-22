import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Design from "../assets/images/design.png";
import Development from "../assets/images/development.png";
import Delivery from "../assets/images/delivery.png";
import Arrow from "../assets/icons/Arrow - Down Circle.svg";
import FirstSliderDesktop from "../components/FirstSliderDesktop";
import Footer from "../components/Footer";
import SecondSliderDesktop from "../components/SecondSliderDesktop";
import { useNavigate } from "react-router-dom";
interface MainProps {
  scroll: string;
}
export const Home = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  // const [, setIsMobileScreen] = useState<boolean>(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setScroll(scrollPosition > scrollThreshold);
    };
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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

          <img src={Arrow} onClick={scrollToBottom} />
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
          <Button onClick={() => navigate("/aboutus")}>Learn more</Button>
        </AboutUs>

        <Services>
          <RectangleDiv>
            <div>
              <img src={Design} />
              <p>UI/UX Design</p>
            </div>
            <div>
              <img src={Development} />
              <p>Software Development</p>
            </div>
            <div>
              <img src={Delivery} />
              <p>Managed Delivery</p>
            </div>
          </RectangleDiv>
        </Services>
        <div>
          <FirstSliderDesktop />
        </div>
        <div>
          <SecondSliderDesktop />
        </div>
        <Footer />
      </Content>
    </div>
  );
};
const RectangleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 29px;
  @media (min-width: 1025px) {
    gap: 0;
  }
  div {
    width: 279px;
    height: 144px;
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
      font-family: "Electrolize";
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
  @media (min-width: 1025px) {
    max-width: 1440px;
  }
`;

const Button = styled.button`
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background-color: white;
  margin-top: 40px;
  font-family: "Electrolize";
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
  font-family: "Electrolize";
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;
export const AboutText = styled.h1`
  font-size: 25px;
  font-style: normal;
  font-family: "Bebas Neue";
  font-weight: 400;
  line-height: 150%;
  color: #000814;
  @media (min-width: 1025px) {
    font-size: 64px;
    max-width: 1440px;
    margin: auto;
  }
`;
const AboutUs = styled.div`
  width: 90%;
  margin: auto;
  @media (min-width: 1025px) {
    max-width: 1440px;
  }
`;
export const Line = styled.div`
  height: 6px;
  background: #120093;
  margin-bottom: 15px;
  @media (min-width: 1025px) {
    margin-bottom: 42px;
  }
`;

const Content = styled.div<MainProps>`
  position: absolute;
  overflow-y: ${(props) => (props.scroll === "true" ? "auto" : "hidden")};
  top: 110%;
  transition: max-height 0.5s ease-in-out;
  @media (min-width: 1025px) {
    top: 120%;
    width: 100%;
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
    font-family: "Bebas Neue";
    color: #7f8389;
    z-index: 555;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 70px;
    @media (min-width: 1025px) {
      font-size: 64px;
    }
  }
  img {
    width: 8%;
    cursor: pointer;
    margin: auto;
    display: flex;
    @media (min-width: 678px) {
      width: 5%;
    }
    @media (min-width: 1024px) {
      width: 3%;
    }
  }
`;
