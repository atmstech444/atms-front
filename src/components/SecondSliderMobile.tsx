import styled from "styled-components";
import Img from "../assets/images/slider.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledComponent } from "@mui/styled-engine-sc";

interface SliderContentProps {
  backgroundColor: string;
}

const SecondSlider = () => {
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
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    dots: false,
    rtl: true,
    cssEase: "linear",
  };

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {sliderItems.map((item) => (
          <SliderContent key={item.id} backgroundColor={item.backgroundColor}>
            <SliderItem>
              <h2>{item.title}</h2>
              <SliderImage src={item.image} alt={item.title} />
            </SliderItem>
          </SliderContent>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 20px;
`;

const StyledSlider: StyledComponent<typeof Slider, any, {}, never> = styled(
  Slider
)``;

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 16px;
  width: 300px;
  padding-bottom: 40px;
  margin-left: 20px;
`;

const SliderContent = styled.div<SliderContentProps>`
  display: flex;
  gap: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

const SliderImage = styled.img`
  width: 100%;
`;

export default SecondSlider;