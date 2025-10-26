import * as React from 'react';

import styled from "styled-components"

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 20px;
    min-height: auto;
  }
`

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const Heading = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 24px;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`

const RedSpan = styled.span`
  color: #e63946;
`

const BlackSpan = styled.span`
  color: #000;
`

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: #e63946;
  border-radius: 50%;
  margin-bottom: 24px;
`

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 32px;
  font-family: 'Segoe UI', sans-serif;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const ReadMoreButton = styled.button`
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
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(164, 22, 26, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 14px 32px;
    font-size: 13px;
  }
`

export default function About() {
  return (
    <AboutContainer>
      <ContentWrapper>
        <LeftContent>
          <Heading>
            <RedSpan>Appicoders – #1.</RedSpan>
            <BlackSpan> Mobile App & Web Development Company in USA</BlackSpan>
          </Heading>
        </LeftContent>

        <RightContent>
          <Description>
            Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years
            of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major
            mobile platforms, including Android, iOS, and Windows.
          </Description>
          <ReadMoreButton>READ MORE</ReadMoreButton>
        </RightContent>
      </ContentWrapper>
    </AboutContainer>
  )
}
