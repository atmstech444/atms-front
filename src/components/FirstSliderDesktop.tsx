import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Arrow from "../assets/images/Arrow - Right Circle.png";
import YogaPicture from "../assets/images/YogaPciture.png";
import HospitalMS from "../assets/images/HospitalMS.jpg";
import TourMS from "../assets/images/TourMS.jpg";
import Restaurant from "../assets/images/Restaurant.jpg";
import DentalSoft from "../assets/images/DentalSoft.jpg";
import Inventory from "../assets/images/Inventory.jpg";
import AgroPad from "../assets/images/AgroPad.jpg";
import DocumentFlow from "../assets/images/DocumentFlow.jpg";
import MarketMS from "../assets/images/MarketMS.png";
import HotelMS from "../assets/images/HotelMS.jpg";
import Mechanization from "../assets/images/Mechanization.jpg";
import HrManagement from "../assets/images/HrManagement.jpg";
import GpiAgents from "../assets/images/GpiAgents.jpg";
import NonHealthClaims from "../assets/images/NonHealthClaims.jpg";
import Distribution from "../assets/images/Distribution.jpg";
import TaskSoft from "../assets/images/TaskSoft.jpg";
import BigBossMS from "../assets/images/BigBossMS.jpg";
import OfficeBox from "../assets/images/OfficeBox.jpg";
import { useNavigate } from "react-router-dom";

interface SliderContentProps {
  backgroundColor: string;
}

const FirstSliderDesktop: React.FC = () => {
  const navigate = useNavigate();
  const sliderRef = useRef<Slider | null>(null);
  
  const handleArrowClick = (projectId: number) => {
    navigate(`/detailed/${projectId}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    // speed: 6000,
    // autoplaySpeed: 6000,
    focusOnSelect: false,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderItems = [
    {
      id: 1,
      title: "Yoga Club",
      image: `${YogaPicture}`,
      backgroundColor: "#C3BFE4",
      description:
        "Software for managing a spa/fitness/yoga center. Managing abonements, customer visits, regular classes, schedules and a built-in caffee. Individual visits, group visits, duration sales and unlimited sales",
    },
    {
      id: 2,
      title: "Hospital ERP",
      image: `${HospitalMS}`,
      backgroundColor: "#BFD4E4",
      description:
        "Software for managing a network of hospitals. Medicines, ambulatory and hospital visits services and calculations, medical staff attendance and work outs.",
    },
    {
      id: 3,
      title: "Tour MS",
      image: `${TourMS}`,
      backgroundColor: "#E3BFE4",
      description:
        "Software for travel agencies, managing in-tours: water, expenses, guides, planning museums, hotels, restaurants (with different menus), transportation. Tours are split based on languages.",
    },
    {
      id: 4,
      title: "RMS",
      image: `${Restaurant}`,
      backgroundColor: "#BFE4D2",
      description:
        "Android application for restaurant waiters and central management software installed in the kitchen (orders monitor) and administration. Electronic menus, orders, tables and customer group merge operations.",
    },
    {
      id: 5,
      title: "Dental MS",
      image: `${DentalSoft}`,
      backgroundColor: "#CDE4BF",
      description:
        "Software for registering appointments, patient histories, visits. Insurance parameters. Monthly reports for insurance companies. Print out forms for patients.",
    },
    {
      id: 6,
      title: "Inventory",
      image: `${Inventory}`,
      backgroundColor: "#E4BFBF",
      description:
        "Software, managing several warehouses, inventory movements, sales, amortization, purchasing from local market or abroad, sending waybills",
    },
    {
      id: 7,
      title: "Agropad",
      image: `${AgroPad}`,
      backgroundColor: "#DFE4BF",
      description:
        "Android system running on mobile pads, created for contracting, making e-signatures, printing out contract forms, sending execution reports and doing sales.",
    },
    {
      id: 8,
      title: "Document Flow",
      image: `${DocumentFlow}`,
      backgroundColor: "#BFE4D2",
      description:
        "Software for automation of sending/approving and editing official documents brought to the office printed on paper. Electronization, versioning and archieving of documents.",
    },
    {
      id: 9,
      title: "Market MS",
      image: `${MarketMS}`,
      backgroundColor: "#CDE4BF",
      description:
        "Software for managing products (by categories), sales, warehouses, distribution, payments, waybills, bakery, customer debts, purchasing operations, annulation of products.",
    },
    {
      id: 10,
      title: "Hotel MS",
      image: `${HotelMS}`,
      backgroundColor: "#E4BFBF",
      description:
        "Software for networks of hotels renting rooms and providing additional entertainment services. Room owners are being paid dividends. Reservation, billing and payments modules are included.",
    },
    {
      id: 11,
      title: "Mechanisation",
      image: `${Mechanization}`,
      backgroundColor: "#DFE4BF",
      description:
        "Software for agricultural sector, managing contracts, payments, agro services, resources and seasonal prices. Software consists of central management part and mobile system running on pads.",
    },
    {
      id: 12,
      title: "HR Management",
      image: `${HrManagement}`,
      backgroundColor: "#CDE4BF",
      description:
        "Software for managing all the hr changes by orders (appointments, salary changes, thanks, punishment, gifts, termination, vacation, business trips). Order templates, working schedules, job descriptions.",
    },
    {
      id: 13,
      title: "GPI Agents",
      image: `${GpiAgents}`,
      backgroundColor: "#DFE4BF",
      description:
        "Android application for mobile agents to register auto and business requests and policies. Insurance central management software to chat with agents, instruct them, return back or integrate policies.",
    },
    {
      id: 14,
      title: "Aldagi BCI NHCP",
      image: `${NonHealthClaims}`,
      backgroundColor: "#CDE4BF",
      description:
        "Insurance software for managing non-health claims processing cycle. Claims processing cycle is dynamically created and managed. All the permissions-based options for departments and roles are also dynamic.",
    },
    {
      id: 15,
      title: "Distribution MS",
      image: `${Distribution}`,
      backgroundColor: "#DFE4BF",
      description:
        "Web portal for distributors for registration of electronic waybills. Synchronization with rs.ge. Application is using much less internet traffic than official portal.",
    },
    {
      id: 16,
      title: "Task Portal",
      image: `${TaskSoft}`,
      backgroundColor: "#CDE4BF",
      description:
        "Web portal for generating, executing, testing tasks (quality assurance) and communicating with customers. Attendance module, knowledge base, project management.",
    },
    {
      id: 17,
      title: "BigBoss MS",
      image: `${BigBossMS}`,
      backgroundColor: "#DFE4BF",
      description:
        "Software for managing inner resources in the organization: customers, staff, charges, payments, products, product versions/modifications/releases, sales, tasks, address book.",
    },
    {
      id: 18,
      title: "OfficeBox",
      image: `${OfficeBox}`,
      backgroundColor: "#CDE4BF",
      description:
        "Software for managing document flow, contacts/address book, tasks (todo lists), scheduler/calendar and discussions during virtual meetings.",
    },
  ];

  return (
    <>
    <SliderMain>
      <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
        {sliderItems.map((item) => (
          <SliderContent key={item.id} backgroundColor={item.backgroundColor}>
            <SliderItemContainer>
              <h2>{item.title}</h2>
              <SliderImage src={item.image} alt={item.title} />
              <Description>{item.description}</Description>
              <ArrowIcon
                src={Arrow}
                onClick={() => handleArrowClick(item.id)}
              />
            </SliderItemContainer>
          </SliderContent>
        ))}
      </Slider>
    </SliderMain>
    <ArrowsContainer>
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()}>&lt;</PrevArrow>
        <NextArrow onClick={() => sliderRef.current?.slickNext()}>&gt;</NextArrow>
      </ArrowsContainer>
    </>
  );
};

const ArrowsContainer = styled.div`
width: 360px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 15px;
  @media (min-width: 768px){
    width: 768px;
  }
  @media (min-width: 1024px){
    width: 1024px;
  }
  @media (min-width: 1440px){
    width: 1440px;
  }
  @media (min-width: 1750px){
    width: 1750px;
  }
  @media (min-width: 1900px){
    width: 1900px;
  }
  @media (min-width: 2000px){
    width: 2000px;
  }
`;
const ArrowButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  color: #333;

  &:hover {
    background-color: #aaa;
    color: #fff;
  }
`;

const PrevArrow = styled(ArrowButton)`
  margin-right: 10px;
`;

const NextArrow = styled(ArrowButton)`
  margin-left: 10px;
`;
const SliderMain = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  @media (min-width: 1440px) {
    width: 1440px;
  }
  @media (min-width: 1600px) {
    width: 1600px;
  }
  @media (min-width: 1800px) {
    width: 1800px;
  }
  @media (min-width: 1900px) {
    width: 1900px;
  }
`;

const SliderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-top: 16px;
  width: 300px;
  padding-bottom: 40px;
  margin-left: 20px;
  height: 330px;
  margin-top: 20px;
  /* @media (min-width: 360px) {
    width: 200px;
  } */
  @media (min-width: 768px) {
    width: 210px;
  }
  @media (min-width: 1440px) {
    width: 300px;
  }
  @media (min-width: 1750px) {
    width: 340px;
  }
  @media (min-width: 1900px) {
    width: 390px;
  }
`;

const SliderContent = styled.div<SliderContentProps>`
  display: flex;
  gap: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

const SliderImage = styled.img`
  width: 100%;
  @media (min-width: 360px) {
    width: 70%;
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1440px) {
    width: 250px;
  }
  @media (min-width: 1750px) {
    width: 270px;
  }
  @media (min-width: 1900px) {
    width: 300px;
  }
`;

const Description = styled.p`
  font-family: "Electrolize";
  text-align: center;
`;

const ArrowIcon = styled.img`
  &:hover {
    cursor: pointer;
  }
`;

export default FirstSliderDesktop;
