import * as React from 'react';

import styled from "styled-components"

const OrderFoodContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: rgb(17, 24, 39);

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
  background-image: url(/food-bg.png);
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
    max-width: 650px;
    object-fit: contain;

    @media (max-width: 768px) {
      max-width: 300px;
    }

    @media (max-width: 480px) {
      max-width: 250px;
    }
  }
`

const RightContent = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-right: 40px;

  @media (max-width: 1024px) {
    padding-right: 20px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    width: 100%;
    gap: 25px;
  }

  img {
    width: 100%;
    max-width: 400px;
    object-fit: contain;

    @media (max-width: 768px) {
      max-width: 300px;
    }

    @media (max-width: 480px) {
      max-width: 250px;
    }
  }
`

const OrderFood = () => {
  return (
    <OrderFoodContainer>
      <BackgroundImage />
      {/* Content Container */}
      <ContentContainer>
        <LeftContent>
          <img src="/OrderFood/Group 129.png" alt="Order Food Content" />
        </LeftContent>

        <RightContent>
          <img src="/OrderFood/Group 123.png" alt="Phone Mockup 1" />
          <img src="/OrderFood/Group 122.png" alt="Phone Mockup 2" />
          <img src="/OrderFood/Group 124.png" alt="Phone Mockup 3" />
        </RightContent>
      </ContentContainer>
    </OrderFoodContainer>
  )
}

export default OrderFood
