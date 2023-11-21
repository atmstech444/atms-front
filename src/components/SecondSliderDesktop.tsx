import { Component } from "react";
import Slider from "react-slick";
import Img from "../assets/images/slider.png";
import styled from "styled-components";

interface SliderContentProps {
  backgroundColor: string;
}

export default class SecondSliderDesktop extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      rtl: true
    };
    const sliderItems = [
      {
        id: 1,
        title: "New Hospitals 1",
        image: `${Img}`,
        backgroundColor: "#C3BFE4",
      },
      {
        id: 2,
        title: "New Hospitals 2",
        image: `${Img}`,
        backgroundColor: "#BFD4E4",
      },
      {
        id: 3,
        title: "New Hospitals 3",
        image: `${Img}`,
        backgroundColor: "#E4BFBF",
      },
      {
        id: 4,
        title: "New Hospitals 4",
        image: `${Img}`,
        backgroundColor: "#CDE4BF",
      },
      {
        id: 5,
        title: "New Hospitals 5",
        image: `${Img}`,
        backgroundColor: "#E4BFBF",
      },
      {
        id: 6,
        title: "New Hospitals 6",
        image: `${Img}`,
        backgroundColor: "#C3BFE4",
      },
      {
        id: 7,
        title: "New Hospitals 7",
        image: `${Img}`,
        backgroundColor: "#BFD4E4",
      },
    ];
    return (
      <SliderMain>
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <SliderContent key={item.id} backgroundColor={item.backgroundColor}>
              <SliderItem>
                <h2>{item.title}</h2>
                <SliderImage src={item.image} alt={item.title} />
              </SliderItem>
            </SliderContent>
          ))}
        </Slider>
      </SliderMain>
    );
  }
}

const SliderMain = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 1440px){ 
        width: 1440px;
    }
    @media (min-width: 1600px){ 
        width: 1600px;
    }
    @media (min-width: 1800px){ 
        width: 1800px;
    }
    @media (min-width: 1900px){ 
        width: 1900px;
    }
`
const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-top: 16px;
  width: 300px;
  padding-bottom: 40px;
  margin-left: 20px;
  @media (min-width: 1440px){
    width: 410px;
  }
`;

const SliderContent = styled.div<SliderContentProps>`
  display: flex;
  gap: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

const SliderImage = styled.img`
  width: 100%;
`;
