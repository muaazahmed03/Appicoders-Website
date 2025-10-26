import * as React from 'react';
import { useState } from "react"
import styled from "styled-components"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  padding-top: 80px;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const WaveBackground = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  position: relative;
  z-index: 10;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  min-height: calc(100vh - 80px);
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const LeftSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    order: 2;
  }
`

const MobileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    max-width: 300px;
    height: 400px;
  }
`

const RightSection = styled.div`
  color: white;
  
  @media (max-width: 1024px) {
    order: 1;
  }
`

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: 'Segoe UI', sans-serif;
  
  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 640px) {
    font-size: 1.875rem;
  }
`

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: #f3f4f6;
  line-height: 1.6;
  
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`

const QuoteButton = styled.button`
  background: linear-gradient(135deg, #a4161a 0%, #7a0d12 100%);
  color: white;
  border: none;
  width: 100%;
  max-width: 300px;
  padding: 16px 40px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 640px) {
    max-width: 100%;
    padding: 12px 24px;
    font-size: 12px;
  }
`

const ArrowContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
  
  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`

const ArrowButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: #dc2626;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 20px;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: scale(0.95);
  }
`

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % 3)
  }

  return (
    <HeroContainer>
      <WaveBackground viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path d="M0,400 Q360,200 720,400 T1440,400 L1440,800 L0,800 Z" fill="#dc2626" opacity="1" />
        <path d="M0,300 Q160,300 720,550 T1440,500 L1440,800 L0,800 Z" fill="#1f2937" opacity="1" />
      </WaveBackground>

      <ContentWrapper>
        <GridContainer>
          <LeftSection>
            <MobileImageWrapper>
              <img src="/public/mobile UI.png" alt="Mobile App Showcase" />
            </MobileImageWrapper>
          </LeftSection>

          <RightSection>
            <Heading>Leading the Way in App Development Innovation</Heading>

            <Description>
              We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
            </Description>

            <QuoteButton>GET A FREE QUOTE</QuoteButton>

            <ArrowContainer>
              <ArrowButton onClick={handlePrev} title="Previous">
                <FiChevronLeft />
              </ArrowButton>
              <ArrowButton onClick={handleNext} title="Next">
                <FiChevronRight />
              </ArrowButton>
            </ArrowContainer>
          </RightSection>
        </GridContainer>
      </ContentWrapper>
    </HeroContainer>
  )
}

export default Hero
