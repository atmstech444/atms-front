import styled from "styled-components";

const SliderItem = ({ title, imgSrc, bgColor }: any) => {
  return (
    <SliderItemWrapper style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <SliderImage src={imgSrc} alt={title} />
    </SliderItemWrapper>
  );
};

const SliderItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 16px;
`;

const SliderImage = styled.img`
  width: 300px;
`;

export default SliderItem;
