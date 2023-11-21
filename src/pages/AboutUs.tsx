import styled from "styled-components";
import mobileImg from "../assets/images/aboutmobile.svg";
import desktopImg from "../assets/images/aboutDesktop.svg";

const AboutUs = () => {
  return (
    <>
      <Header>
        <AboutText>About us</AboutText>
        <Line></Line>
      </Header>
      <MainContainer>
        <Content>
          <ImgMobile src={mobileImg} alt="icon" />
          <ImgDesktop src={desktopImg} alt="icon" />
          <TextDiv>
            <p>
              Our company has ultimate experience building custom software
              solutions for financial and non-financial institutions.
              Established in the year 2000, ATMS (form FNXCo Holding Silver
              Label) is a global information technology, consulting, and
              outsourcing company.
            </p>
            <p>
              We have pioneered ourselves in providing end-to-end solutions and
              services in the areas of information technology, consulting, and
              outsourcing in various segments of industry like agriculture,
              education, finance, healthcare, life sciences, hotel/hospitality,
              media and entertainment, and more.
            </p>
            <p>
              Our team of talented, dynamic, and young professionals is capable
              of providing high-end quality solutions to our clients with the
              right blend of technology, domain knowledge, and effective
              methodology.
            </p>
            ATMS regularly embraces and masters new information technologies,
            human learning, enhancements, and training tools to provide added
            value to our customers.
          </TextDiv>
        </Content>
      </MainContainer>
    </>
  );
};

export default AboutUs;

const MainContainer = styled.div`
  margin-top: 150px;
  padding: 0 180px;

  @media (max-width: 899px) {
    padding: 0 25px;
  }
`;

const AboutText = styled.h1`
  color: #fff;
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

const TextDiv = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 16px;
  align-items: center;
  @media (min-width: 599px) {
    font-size: 26px;
    gap: 30px;
    margin-top: 50px;
  }
`;

const ImgMobile = styled.img`
  width: 100%;
  @media (min-width: 599px) {
    display: none;
  }
`;

const ImgDesktop = styled.img`
  display: none;
  @media (min-width: 599px) {
    display: block;
    width: 80%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const Header = styled.div`
  background-color: #000814;
  padding: 18% 24px 0 24px;
  @media (min-width: 678px) {
    padding: 10% 24px 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 10% 72px 0 72px;
  }
`;
