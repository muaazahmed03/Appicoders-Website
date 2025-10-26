import * as React from 'react';

import { useState, useEffect } from "react"
import styled from "styled-components"
import { FiMenu, FiX } from "react-icons/fi"

const NavbarContainer = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 50;
  background-color: transparent;
  transition: background-color 0.3s ease;
  
  &.scrolled {
    background-color: #dc2626;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`

const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  
  img {
    height: 48px;
    width: auto;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex: 1;
  
  @media (max-width: 1024px) {
    display: none;
  }
`

const NavLink = styled.a`
  color: white;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.3s ease;
  
  &:hover {
    color: #000000ff;
  }
`

const PhoneBox = styled.button`
  display: none;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid white;
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 2rem; 
  
  @media (min-width: 768px) {
    display: flex;
  }

  span {
    color: white;
    font-weight: bold;
    font-size: 14px;
  }

  &:hover {
    background-color: white;

    span {
      color: #dc2626;
    }
  }
`


const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  
  @media (min-width: 1024px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #dc2626;
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`

const MobileLink = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
`

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#whychoose" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Products", href: "#products" },
    { label: "Testimonial", href: "#testimonial" },
    { label: "Technologies", href: "#technologies" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <NavbarContainer className={isScrolled ? "scrolled" : ""}>
      <NavContent>
        <Logo>
          <img src="/appicoders-logo.png" alt="Appicoders Logo" />
        </Logo>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink key={index} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <PhoneBox>
          <span>📞</span>
          <span>+1 (800) 826-8018</span>
        </PhoneBox>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiX /> : <FiMenu />}</MobileMenuButton>
      </NavContent>

      <MobileMenu isOpen={isOpen}>
        {navItems.map((item, index) => (
          <MobileLink key={index} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </MobileLink>
        ))}
        <MobileLink href="tel:+18008268018" onClick={() => setIsOpen(false)}>
          📞 +1 (800) 826-8018
        </MobileLink>
      </MobileMenu>
    </NavbarContainer>
  )
}

export default Navbar