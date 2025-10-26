import React from "react";

import { useState } from "react"
import styled from "styled-components"
import bgImage from "../../public/Technology/Group 137.png"
import mainImage from "../../public/Technology/Group 154.png"

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

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 20px;
  }

  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
`

const MainImg = styled.img`
  width: 1000px;
  max-width: 900px;
  height: auto;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.4));
  transition: transform 0.5s ease;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 700px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 500px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    width: 300px;
    max-width: 100%;
  }
`

export default function Technology() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Section>
      <Overlay></Overlay>
      <MainImg
        src={mainImage}
        alt="Industry"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </Section>
  )
}
