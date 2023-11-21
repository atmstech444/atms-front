import { useEffect, useState } from "react";
import LogoImage from "../assets/images/logo.png";
import LogoWhite from "../assets/images/logoWhite.png";
import styled from "styled-components";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";

interface MainProps {
  isscrolled: string;
}
export interface Props {
  active: string;
}
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<string>("");

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
        <Content>
          <Link to="/" onClick={() => setIsActive("")}>
            <Logo src={isScrolled ? LogoImage : LogoWhite} />
          </Link>
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
          <DesktopHeader active={isActive}>
            <Link to="services" onClick={() => setIsActive("services")}>
              Services
            </Link>
            <Link to="project" onClick={() => setIsActive("project")}>
              Project
            </Link>
            <Link to="aboutus" onClick={() => setIsActive("aboutus")}>
              About us
            </Link>
            <Link to="career" onClick={() => setIsActive("career")}>
              Career
            </Link>
            <Link to="contact" onClick={() => setIsActive("contact")}>
              Contact
            </Link>
          </DesktopHeader>
        </Content>
      </Main>
      {isHeaderOpen && (
        <MobileHeader active={isActive} setIsActive={setIsActive} />
      )}
    </>
  );
};
const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  @media (min-width: 1025px) {
    width: 100%;
  }
`;
const Logo = styled.img`
  height: 48px;
  width: 110px;
  cursor: pointer;
  @media (min-width: 1025px) {
    height: 146px;
    width: 242px;
    margin-left: 72px;
  }
`;

const DesktopHeader = styled.div<Props>`
  display: none;
  @media (min-width: 1025px) {
    padding-right: 72px;
    display: flex;
    gap: 32px;
    align-items: center;
  }
  a {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
    color: #7f8389;
    &:nth-child(1) {
      color: ${(props) => props.active === "services" && "black"};
    }
    &:nth-child(2) {
      color: ${(props) => props.active === "project" && "white"};
    }
    &:nth-child(3) {
      color: ${(props) => props.active === "aboutus" && "white"};
    }
    &:nth-child(4) {
      color: ${(props) => props.active === "career" && "white"};
    }
    &:nth-child(5) {
      color: ${(props) => props.active === "contact" && "white"};
    }
  }
`;

const Main = styled.div<MainProps>`
  z-index: 999;
  width: 100%;
  justify-content: space-between;
  transition: 0.5s;
  display: flex;
  top: 0;
  position: fixed;
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
