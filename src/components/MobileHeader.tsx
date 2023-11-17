import styled from "styled-components";

const MobileHeader = () => {
  return (
    <Main>
      <h1>Services</h1>
      <h1>Project</h1>
      <h1>About us</h1>
      <h1>Career</h1>
      <h1>Company</h1>
      <h1>Contact</h1>
    </Main>
  );
};

export default MobileHeader;

const Main = styled.div`
  position: absolute;
  z-index: 999;
  top: 60px;
  width: 100%;
  height: 100vh;
  background-color: white;
  h1 {
    color: #7f8389;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-align: end;
    width: 95%;
  }
`;
