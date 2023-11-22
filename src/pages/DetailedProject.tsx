import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AboutText, Line } from "./Home";
import Arrow from "../assets/images/Arrow - Right 1.png";

interface Project {
  id: number;
  title: string;
  image: string;
  backgroundColor: string;
  description: string;
}

interface DetailedProjectProps {
  projectsData: Project[];
}

const DetailedProject: React.FC<DetailedProjectProps> = ({ projectsData }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((item) => item.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleProjectClick = () => {
    navigate("/project");
  };

  return (
    <div>
      <Container>
        <div onClick={() => handleProjectClick()}>
          <AboutText style={{ color: "#7F8389" }}>Our projects</AboutText>
        </div>
        <img src={Arrow} />
        <Title>{project.title}</Title>
      </Container>
      <Line></Line>
      <ItemsContainer>
        <ProjectImage src={project.image} />
        <p>{project.description}</p>
      </ItemsContainer>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  background: black;
  padding: 18% 24px 0 24px;
  @media (min-width: 678px) {
    padding: 10% 24px 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 10% 72px 0 72px;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 25px;
  font-style: normal;
  font-family: "Bebas Neue";
  font-weight: 400;
  line-height: 150%;
  @media (min-width: 1024px) {
    font-size: 64px;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 112px;
  line-height: 150%;
  font-family: "Electrolize";
  @media (min-width: 1440px){
    font-size: 32px;
    gap: 32px;
    padding-left: 72px;
  padding-right: 72px;
  }
  
`;

const ProjectImage = styled.img`
  height: 180px;
  @media (min-width: 768px) {
    width: 500px;
    height: 220px;
  }
  @media (min-width: 1024px) {
    width: 700px;
    height: 420px;
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 751px;
  }
`;

export default DetailedProject;
