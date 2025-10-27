import * as React from 'react';
import styled from "styled-components"
import leftImage from "/comments/Group 47.png"
import rightImage from "/comments/Group 91.png"
import bgImage from "/comments/Group 171.png"

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 40px 20px;

  @media (max-width: 1024px) {
    min-height: 120vh;
  }

  @media (max-width: 768px) {
    min-height: 150vh;
    padding: 80px 20px;
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 480px) {
    min-height: 180vh;
    padding: 60px 15px;
  }
`

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftImg = styled.img`
  position: absolute;
  width: 400px;
  height: auto;
  object-fit: contain;
  left: 160px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    width: 300px;
    left: 80px;
  }

  @media (max-width: 768px) {
    position: relative;
    left: 0;
    transform: none;
    width: 280px;
    height: auto;
    margin-bottom: 40px;
    order: 1;
  }

  @media (max-width: 480px) {
    width: 400px;
  }
`

const RightImg = styled.img`
  position: absolute;
  width: 570px;
  height: auto;
  object-fit: contain;
  right: 200px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 1024px) {
    width: 450px;
    right: 100px;
  }

  @media (max-width: 768px) {
    position: relative;
    right: 0;
    transform: none;
    width: 320px;
    height: auto;
    margin-top: 40px;
    order: 3;
  }

  @media (max-width: 480px) {
    width: 450px;
    margin-top: 50px;
  }
`

const ImagesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    width: 100%;
  }
`

export default function Comments() {
  return (
    <Section>
      <Overlay>
        <ImagesWrapper>
          <LeftImg src={leftImage || "/placeholder.svg"} alt="Left" />
          <RightImg src={rightImage} alt="Right" />
        </ImagesWrapper>
      </Overlay>
    </Section>
  )
}
