import * as React from 'react';
import styled from "styled-components"

const ServicesContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #e63946 0%, #d62828 100%);

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 20px;
  }
`

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(/public/services-bg-red.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
`

const WaveTop = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 80px;
  }
`

const WaveBottom = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 1;

  @media (max-width: 768px) {
    height: 80px;
  }
`

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 40px;
  z-index: 2;
  gap: 40px;

  @media (max-width: 1024px) {
    padding: 60px 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 40px;
  }
`

const LeftContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;

  @media (max-width: 1024px) {
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 600px;
    object-fit: contain;

    @media (max-width: 768px) {
      max-width: 300px;
    }

    @media (max-width: 480px) {
      max-width: 850px;
    }
  }
`

const RightContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;

  @media (max-width: 1024px) {
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    width: 100%;
    justify-content: center;
  }

  img {
    width: 100%;
    max-width: 500px;
    object-fit: contain;

    @media (max-width: 768px) {
      max-width: 350px;
    }

    @media (max-width: 480px) {
      max-width: 580px;
    }
  }
`

const Services = () => {
  return (
    <ServicesContainer>
      <BackgroundImage />

      {/* Top Wave Cut */}
      <WaveTop viewBox="0 0 1200 150" preserveAspectRatio="none">
        <path d="M0,80 Q300,20 600,80 T1200,80 L1200,0 L0,0 Z" fill="white" opacity="0.05" />
        <path
          d="M0,100 Q300,40 600,100 T1200,100 L1200,20 Q300,60 600,20 T1200,20 L1200,150 L0,150 Z"
          fill="white"
          opacity="0.08"
        />
      </WaveTop>

      {/* Bottom Wave Cut - Dramatic Diagonal */}
      <WaveBottom viewBox="0 0 1200 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(172, 0, 0, 1)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(17, 24, 39)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path d="M0,40 Q300,100 600,40 T1200,40 L1200,150 L0,150 Z" fill="url(#waveGradient)" />
        <path
          d="M0,20 Q400,80 600,20 T1200,20 L1200,60 Q300,120 600,60 T1200,60 L1200,150 L0,150 Z"
          fill="rgb(17, 24, 39)"
          opacity="0.7"
        />
      </WaveBottom>

      {/* Content Container */}
      <ContentContainer>
        <LeftContent>
          <img src="/public/Group 168.png" alt="Services Icons" />
        </LeftContent>

        <RightContent>
          <img src="/public/mask-group.png" alt="Laptop Mockup" />
        </RightContent>
      </ContentContainer>
    </ServicesContainer>
  )
}

export default Services
