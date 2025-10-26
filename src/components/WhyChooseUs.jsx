import React from "react"
import styled from "styled-components"

const Section = styled.section`
  background-color: #f5f7fa;
  padding: 80px 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`

const Header = styled.div`
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: #111;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-size: 17px;
  color: #555;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    gap: 40px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 30px;
  }
`

const Circle = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#fff" : "#f0f0f0")};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 33px;
  transform: ${(props) => (props.active ? "scale(1.1)" : "scale(1)")};
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    padding: 25px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
    padding: 20px;
  }
`

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ffffff" : "#bdbdbd")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 15px;
  }
`

const IconImage = styled.img`
  width: 35px;
  height: 35px;

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`

const CircleTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#222" : "#777")};
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`

const CircleDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => (props.active ? "#444" : "#888")};

  @media (max-width: 480px) {
    font-size: 13px;
    line-height: 1.4;
  }
`

export default function WhyChooseUs() {
  const features = [
    {
      title: "Focused Business Approach",
      description:
        "We research, plan, and execute – and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
      image: "/Choose/Group 25.png",
      active: false,
    },
    {
      title: "Professional Team",
      description:
        "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & web app platforms.",
      image: "/Choose/Group 24.png",
      active: true,
    },
    {
      title: "Flexible Payment Terms",
      description:
        "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
      image: "/Choose/credit-card.png",
      active: false,
    },
  ]

  return (
    <Section>
      <Header>
        <Title>Why Choose Us?</Title>
        <Description>
          With our unique approach and cost-effective solutions, your business will prosper because quality is the top
          priority for us.
        </Description>
      </Header>

      <CirclesContainer>
        {features.map((feature, index) => (
          <Circle key={index} active={feature.active}>
            <IconContainer active={feature.active}>
              <IconImage src={feature.image} alt={feature.title} />
            </IconContainer>
            <CircleTitle active={feature.active}>{feature.title}</CircleTitle>
            <CircleDescription active={feature.active}>{feature.description}</CircleDescription>
          </Circle>
        ))}
      </CirclesContainer>
    </Section>
  )
}
