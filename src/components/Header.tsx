import { useEffect, useState } from "react";
import LogoImage from "../assets/images/logo.png";
import styled from "styled-components";
import MobileHeader from "./MobileHeader";
interface MainProps {
  isscrolled: string;
}
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setIsScrolled(scrollPosition > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Main isscrolled={isScrolled.toString()}>
        <Logo src={LogoImage} />
        <ImgContainer onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 7H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </ImgContainer>
        <DesktopHeader>
          <h1>Services</h1>
          <h1>Project</h1>
          <h1>About us</h1>
          <h1>Career</h1>
          <h1>Company</h1>
          <h1>Contact</h1>
        </DesktopHeader>
      </Main>
      {isHeaderOpen && <MobileHeader />}
    </>
  );
};
const Logo = styled.img`
  height: 48px;
  @media (min-width: 1025px) {
    width: 127px;
    height: 146px;
    margin-left: 72px;
  }
`;

const DesktopHeader = styled.div`
  display: none;

  @media (min-width: 1025px) {
    padding-right: 72px;
    display: flex;
    gap: 32px;
    align-items: center;
  }
  h1 {
    color: #7f8389;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
  }
`;

const Main = styled.div<MainProps>`
  z-index: 999;
  width: 100%;

  justify-content: space-between;
  transition: 0.5s;
  display: flex;
  top: 0;
  position: ${(props) => (props.isscrolled === "true" ? "fixed" : "absolute")};
  box-shadow: ${(props) =>
    props.isscrolled === "true" ? "0 2px 28px 0 rgba(0,0,0,.06)" : "none"};
  background-color: ${(props) =>
    props.isscrolled === "true" ? "#fff" : "transparent"};
  animation: ${(props) =>
    props.isscrolled === "true"
      ? "fadeInDown .5s ease-in-out 0s 1 normal none running"
      : "none"};
`;

const ImgContainer = styled.div`
  margin: auto 0;
  @media (min-width: 1025px) {
    display: none;
  }
`;
