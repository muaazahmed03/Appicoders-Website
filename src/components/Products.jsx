import * as React from 'react';
import styled from "styled-components"

const ProductsContainer = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #dc143c 0%, #b91c1c 100%);
  position: relative;
  padding: 60px 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background-image: url('/public/Products/Vector-top.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background-image: url('/public/Products/Vector-bottom.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
`

const NavBar = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-bottom: 50px;
  flex-wrap: wrap;
  align-items: center;
`

const NavItem = styled.span`
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-bottom: 2px solid transparent;

  &:first-child {
    border-bottom: 2px solid white;
  }

  &:hover {
    opacity: 0.8;
    border-bottom: 2px solid white;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  height: 350px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.79);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  text-align: center;
  gap: 15px;
`

const OverlayImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(1.1);
`

const OverlayTitle = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: 700;
`

const OverlayText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
  line-height: 1.6;
`

const Products = () => {
  const products = [
    {
      id: 1,
      name: "CRM 365",
      image: "/public/Products/Group 151.png",
      hasOverlay: false,
    },
    {
      id: 2,
      name: "Marketplace E-Commerce",
      image: "/public/Products/Group 146.png",
      hasOverlay: false,
    },
    {
      id: 3,
      name: "Sports Training App",
      image: "/public/Products/Group 147.png",
      hasOverlay: false,
    },
    {
      id: 4,
      name: "Fitness",
      image: "/public/Products/Group 149.png",
      hasOverlay: false,
    },
    {
      id: 5,
      name: "Health Supreme",
      image: "/public/Products/Group 147.png",
      hasOverlay: true,
      overlayTitle: "Health Supreme",
      overlayText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et mi consequuntur.",
      overlayImage: "/public/Products/Group.png",
    },
    {
      id: 6,
      name: "OSDA",
      image: "/public/Products/Group 150.png",
      hasOverlay: false,
    },
  ]

  const navItems = [
    "ALL",
    "Health Supreme",
    "CRM 365",
    "OSDA",
    "Marketplace E-Commerce Platform",
    "Sports Training App",
    "Fitness",
  ]

  return (
    <ProductsContainer>
      <ContentWrapper>
        <Title>Products</Title>

        <NavBar>
          {navItems.map((item, index) => (
            <NavItem key={index}>{item}</NavItem>
          ))}
        </NavBar>

        <CardsGrid>
          {products.map((product) => (
            <Card key={product.id}>
              <CardImage src={product.image} alt={product.name} />
              {product.hasOverlay && (
                <CardOverlay>
                  {product.overlayImage && <OverlayImage src={product.overlayImage} alt="overlay icon" />}
                  <OverlayTitle>{product.overlayTitle}</OverlayTitle>
                  <OverlayText>{product.overlayText}</OverlayText>
                </CardOverlay>
              )}
            </Card>
          ))}
        </CardsGrid>
      </ContentWrapper>
    </ProductsContainer>
  )
}

export default Products
