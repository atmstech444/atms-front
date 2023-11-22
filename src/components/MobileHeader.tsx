import { Link } from "react-router-dom";
import styled from "styled-components";
import { Props } from "./Header";

const MobileHeader = ({
  active,
  setIsActive,
  setIsHeaderOpen,
}: {
  active: string;
  setIsActive: React.Dispatch<React.SetStateAction<string>>;
  setIsHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleClick = (name: string) => {
    setIsActive(name);
    setIsHeaderOpen(false);
  };
  return (
    <Main active={active}>
      <Link to="services" onClick={() => handleClick("services")}>
        Services
      </Link>
      <Link to="project" onClick={() => handleClick("project")}>
        Project
      </Link>
      <Link to="aboutus" onClick={() => handleClick("aboutus")}>
        About us
      </Link>
      <Link to="career" onClick={() => handleClick("career")}>
        Career
      </Link>
      <Link to="contact">Contact</Link>
    </Main>
  );
};

export default MobileHeader;

const Main = styled.div<Props>`
  position: fixed;
  z-index: 999;
  top: 65px;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 32px;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    font-family: "Bebas Neue";
    padding-left: 3%;
    cursor: pointer;
    color: #7f8389;
    &:nth-child(1) {
      color: ${(props) => props.active === "services" && "black"};
    }
    &:nth-child(2) {
      color: ${(props) => props.active === "project" && "black"};
    }
    &:nth-child(3) {
      color: ${(props) => props.active === "aboutus" && "black"};
    }
    &:nth-child(4) {
      color: ${(props) => props.active === "career" && "black"};
    }
    &:nth-child(5) {
      color: ${(props) => props.active === "contact" && "black"};
    }
  }
`;
