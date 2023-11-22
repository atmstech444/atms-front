import styled from "styled-components";
import { AboutText, Line } from "./Home";
import Arrow from "../assets/icons/Arrow - Right Circle.svg";
import Footer from "../components/Footer";
import data from "../../projectsData.json";
import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();
  return (
    <Main>
      <Container>
        <AboutText style={{ color: "white" }}>Our projects</AboutText>
        <Line></Line>
      </Container>
      <Items>
        {data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.backgroundColor }}
            onClick={() => navigate(`/detailed/${item.id}`)}
          >
            <h1>{item.title}</h1>
            <Image src={item.image} />
            <img style={{ width: "8%" }} src={Arrow} />
          </div>
        ))}
      </Items>
      <Footer />
    </Main>
  );
}
const Items = styled.div`
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  justify-content: space-around;
  @media (min-width: 1024px) {
    padding: 0 72px;
    max-width: 1440px;
    margin: auto;
  }
  div {
    width: 70%;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    gap: 24px;
    border-radius: 4px;
    margin: auto;
    cursor: pointer;
    @media (min-width: 678px) {
      width: 42%;
    }
    @media (min-width: 1024px) {
      width: 26%;
    }
  }
`;
const Image = styled.img`
  width: 85%;
`;
const Main = styled.div``;

const Container = styled.div`
  background: black;
  padding: 18% 24px 0 24px;
  @media (min-width: 678px) {
    padding: 10% 24px 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 18% 72px 0 72px;
  }
`;
