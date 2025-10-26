import * as React from 'react';
import styled from "styled-components"

const AwardsContainer = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AwardsTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 50px;
  text-align: center;
  font-family: 'Geist', sans-serif;
`

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const AwardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${(props) => (props.isDarkBg ? "#3a3a3a" : "#ffffff")};
  border-radius: 50%;
  objectFit: "cover";
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
  min-height: 300px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`

const AwardImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: contain;
  margin-bottom: 15px;
`

const AwardDescription = styled.p`
  font-size: 14px;
  color: ${(props) => (props.isDarkBg ? "#ffffff" : "#666666")};
  text-align: center;
  line-height: 1.6;
  font-family: 'Geist', sans-serif;
`

export default function Awards() {
  const awards = [
    {
      id: 1,
      image: "/Awards/image 4.png",
      isDark: false,
    },
    {
      id: 2,
      image: "/Awards/Group 96.png",
      isDark: true,
    },
    {
      id: 3,
      image: "/Awards/image 2.png",
      isDark: false,
    },
    {
      id: 4,
      image: "/Awards/image 13.png",
      isDark: false,
    },
  ]

  return (
    <AwardsContainer>
      <AwardsTitle>Awards and Recognitions</AwardsTitle>
      <AwardsGrid>
        {awards.map((award) => (
          <AwardCard key={award.id} isDarkBg={award.isDark}>
            <AwardImage src={award.image} alt={award.description} />
            <AwardDescription isDarkBg={award.isDark}>{award.description}</AwardDescription>
          </AwardCard>
        ))}
      </AwardsGrid>
    </AwardsContainer>
  )
}
