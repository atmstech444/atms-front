import styled from "styled-components";
import { AboutText, Line } from "./Home";
import Project from "../assets/images/project.png";
import Arrow from "../assets/icons/Arrow - Right Circle.svg";
const data = [
  {
    name: "Gpi holding",
    image: Project,
    color: "#C3BFE4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#BFD4E4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#E3BFE4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#BFE4D2",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#C3BFE4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#BFD4E4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#E3BFE4",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#BFE4D2",
  },
  {
    name: "Gpi holding",
    image: Project,
    color: "#BFE4D2",
  },
];
export default function Projects() {
  return (
    <Main>
      <Container>
        <AboutText style={{ color: "white" }}>Our projects</AboutText>
        <Line></Line>
      </Container>
      <Items>
        {data.map((item) => (
          <div style={{ backgroundColor: item.color }}>
            <h1>{item.name}</h1>
            <Image src={item.image} />
            <img style={{ width: "8%" }} src={Arrow} />
          </div>
        ))}
      </Items>
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
    padding: 10% 72px 0 72px;
  }
`;
