import { Link } from "react-router-dom";
import styled from "styled-components";
import { Props } from "./Header";

const MobileHeader = ({
  active,
  setIsActive,
}: {
  active: string;
  setIsActive: any;
}) => {
  return (
    <Main active={active}>
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
    </Main>
  );
};

export default MobileHeader;

const Main = styled.div<Props>`
  position: fixed;
  z-index: 999;
  top: 60px;
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

    padding-left: 3%;
    cursor: pointer;
    color: #7f8389;
    &:nth-child(1) {
      color: ${(props) => props.active === "services" && "white"};
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
