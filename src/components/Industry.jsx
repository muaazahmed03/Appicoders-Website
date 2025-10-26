import * as React from 'react';
import styled from "styled-components"

const IndustryContainer = styled.div`
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  font-family: 'Geist', sans-serif;
`

const IndustryWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled.h2`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 50px;
  letter-spacing: -0.5px;
`

const GridContainer = styled.div`
  border: 3px solid #4b4c4eff;
  border-radius: 8px;
  padding: 40px;
  background: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 30px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 20px;
  }
`

const Card = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.highlighted &&
    `
    border-bottom: 4px solid #dc143c;
    box-shadow: 0 8px 16px rgba(220, 20, 60, 0.15);
  `}

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
  letter-spacing: -0.3px;
`

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`

const Industry = () => {
  const industries = [
    {
      id: 1,
      icon: "/public/Industries/pills.png",
      title: "Medical & Pharma Services",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: false,
    },
    {
      id: 2,
      icon: "/public/Industries/running-shoes.png",
      title: "Training & Fitness",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: true,
    },
    {
      id: 3,
      icon: "/public/Industries/digital-economy.png",
      title: "Fintech",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: false,
    },
    {
      id: 4,
      icon: "/public/Industries/healthcare.png",
      title: "Health & Fitness",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: false,
    },
    {
      id: 5,
      icon: "/public/Industries/briefcasee.png",
      title: "Business & Services",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: false,
    },
    {
      id: 6,
      icon: "/public/Industries/cleaning.png",
      title: "Cleaning Services",
      description:
        "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      highlighted: false,
    },
  ]

  return (
    <IndustryContainer>
      <IndustryWrapper>
        <Title>Industries</Title>
        <GridContainer>
          {industries.map((industry) => (
            <Card key={industry.id} highlighted={industry.highlighted}>
              <IconWrapper>
                <img src={industry.icon || "/placeholder.svg"} alt={industry.title} />
              </IconWrapper>
              <CardTitle>{industry.title}</CardTitle>
              <CardDescription>{industry.description}</CardDescription>
            </Card>
          ))}
        </GridContainer>
      </IndustryWrapper>
    </IndustryContainer>
  )
}

export default Industry
