import * as React from 'react';
import styled from "styled-components"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

const FooterContainer = styled.footer`
  background-color: #2a2e3e;
  color: #ffffff;
  padding: 60px 40px 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 10px;
`

const ContactTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
`

const ContactInfo = styled.p`
  font-size: 14px;
  color: #b0b0b0;
  margin: 5px 0;
  line-height: 1.6;
`

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #3b4052;
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63946;
  }

  svg {
    font-size: 18px;
  }
`

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const LinkItem = styled.li`
  font-size: 14px;
  color: #b0b0b0;

  &:before {
    content: '▸ ';
    color: #e63946;
    margin-right: 8px;
  }
`

const LinkText = styled.a`
  color: #b0b0b0;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #e63946;
  }
`

const FooterBottom = styled.div`
  border-top: 2px solid #18191aff;
  padding-top: 20px;
  text-align: center;
`

const CopyrightText = styled.p`
  font-size: 13px;
  color: #b0b0b0;
  margin: 0;
`

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Section - Logo and Contact */}
        <LogoSection>
          <Logo src="/public/Logo-Final 2.png" alt="AppiCodrero Inc." />
          <div>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactInfo>Tel: +1 (800) 826-8018</ContactInfo>
            <ContactInfo>Email: info@appicoders.com</ContactInfo>
            <SocialIcons>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
            </SocialIcons>
          </div>
        </LogoSection>

        {/* Middle Section - About */}
        <FooterSection>
          <SectionTitle>About</SectionTitle>
          <LinkList>
            <LinkItem>
              <LinkText href="#home">HOME</LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText href="#about">ABOUT US</LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText href="#contact">CONTACT US</LinkText>
            </LinkItem>
          </LinkList>
        </FooterSection>

        {/* Right Section - Services */}
        <FooterSection>
          <SectionTitle>Appicoders Services</SectionTitle>
          <LinkList>
            <LinkItem>
              <LinkText href="#iphone">IPHONE APPLICATION DEVELOPMENT</LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText href="#android">ANDROID APPLICATION DEVELOPMENT</LinkText>
            </LinkItem>
            <LinkItem>
              <LinkText href="#enterprise">ENTERPRISE APP DEVELOPMENT</LinkText>
            </LinkItem>
          </LinkList>
        </FooterSection>
      </FooterContent>

      {/* Bottom Section - Copyright */}
      <FooterBottom>
        <CopyrightText>© 2025 APPICODERS. ALL RIGHTS RESERVED.</CopyrightText>
      </FooterBottom>
    </FooterContainer>
  )
}
