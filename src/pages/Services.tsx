import { Line, AboutText, Header } from "./AboutUs";
import styled from "styled-components";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img1deskt from "../assets/images/img1deskt.png";
import img2deskt from "../assets/images/img2deskt.png";
import img3deskt from "../assets/images/img3deskt.png";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <Header>
        <AboutText>Services</AboutText>
        <Line></Line>
      </Header>
      <MainContainer>
        <GridContainer>
          <GridItem>
            <MobileImg src={img3} alt="img1" />
            <DesktopImg src={img3deskt} alt="img1" />
            <Content>
              <p>UI/UX Design:</p>
              <div>
                Immerse your audience in an aesthetically pleasing and
                seamlessly functional digital environment. Our UI/UX design
                services are a harmonious blend of creativity and user-centric
                principles. We transform concepts into engaging interfaces,
                ensuring that every click, swipe, and interaction contributes to
                a memorable user experience. Elevate your brand with designs
                that not only catch the eye but also resonate with your target
                audience.
              </div>
            </Content>
          </GridItem>
          <GridItem>
            <MobileImg src={img2} alt="img2" />
            <DesktopImg src={img2deskt} alt="img2" />
            <Content>
              <p>Software Development:</p>
              <div>
                Journey into the realm of digital innovation with our bespoke
                software development solutions. Whether you're envisioning a
                dynamic web platform, a feature-rich mobile app, or robust
                enterprise software, our development team is geared to turn your
                ideas into reality. We meticulously code, test, and deploy,
                ensuring your software not only meets but exceeds expectations.
                Transform your digital aspirations into a powerful, functional
                reality with our expertise.
              </div>
            </Content>
          </GridItem>
          <GridItem>
            <MobileImg src={img1} alt="img3" />
            <DesktopImg src={img1deskt} alt="img3" />
            <Content>
              <p>Managed Delivery:</p>
              <div>
                Experience project management redefined with our Managed
                Delivery services. We take the helm, guiding your projects from
                conception to completion. Our seasoned professionals handle the
                intricacies, ensuring efficient coordination and timely
                delivery. Transparency and communication are at the forefront as
                we navigate challenges, mitigating risks, and ensuring
                successful project outcomes. With us, you can relax and witness
                your projects unfold seamlessly, free from the complexities of
                project management.
              </div>
            </Content>
          </GridItem>
        </GridContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Services;

const MainContainer = styled.div`
  padding: 0 80px;

  @media (max-width: 899px) {
    padding: 0 25px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 10px;
  margin: 80px 0;

  @media (min-width: 1024px) {
    gap: 50px;
    place-items: start;
  }
  @media (min-width: 1440px) {
    place-items: center;
  }
  @media (min-width: 1599px) {
    gap: 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  margin: 10px 0;
  font-size: 16px;
  line-height: 1.4;
  font-family: Electrolize;

  @media (min-width: 499px) {
    font-size: 20px;
    gap: 10px;
    max-width: 80%;
    p {
      align-self: center;
    }
  }
  @media (min-width: 1024px) {
    align-items: start;
    margin: 0;
    gap: 0;
    max-width: 70%;
    p {
      align-self: start;
    }
  }
  @media (min-width: 1440px) {
    align-items: center;
    line-height: 1.5;
    max-width: 50%;
  }
  @media (min-width: 1599px) {
    max-width: 30%;
  }
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: start;
    gap: 20px;
    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }
  @media (min-width: 1440px) {
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1599px) {
    gap: 100px;
  }
`;

const MobileImg = styled.img`
  width: 100%;
  @media (min-width: 499px) {
    display: none;
  }
`;

const DesktopImg = styled.img`
  display: none;
  @media (min-width: 499px) {
    display: block;
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1599px) {
    width: 30%;
  }
`;
