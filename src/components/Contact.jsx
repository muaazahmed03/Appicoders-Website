import * as React from 'react';
import styled from "styled-components"

const ContactContainer = styled.div`
  display: flex;
  min-height: 600px;
  background: #f5f5f5;
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`

const LeftSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #e63946 0%, #d62828 100%);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  
  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`

const Label = styled.p`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  margin: 0 0 20px 0;
  text-transform: uppercase;
`

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin: 0 0 20px 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 40px 0;
  opacity: 0.95;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  background: white;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  background: white;
  color: #333;
  resize: vertical;
  min-height: 120px;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
  }
`

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #a4161a 0%, #7a0d12 100%);
  color: white;
  border: none;
  width: 100%;
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
`

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: white;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ImageContainer = styled.div`
  flex: 1;
  overflow: hidden;
  background: #f0f0f0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ContactInfo = styled.div`
  background: #000000ff;
  color: white;
  padding: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`

const InfoText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 30px 0;
  opacity: 0.9;
`

const PhoneIcon = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
  color: white;
`

const PhoneNumber = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10px 0;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`

const Email = styled.p`
  font-size: 14px;
  margin: 0;
  opacity: 0.8;
`

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <ContactContainer>
      <LeftSection>
        <Label>Let's Talk</Label>
        <Heading>Got an idea? Let's get in touch!</Heading>
        <Description>
          Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
        </Description>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" placeholder="Your Name" required />
          </FormGroup>

          <FormGroup>
            <Input type="email" placeholder="Email Address" required />
          </FormGroup>

          <FormGroup>
            <Input type="tel" placeholder="Phone" required />
          </FormGroup>

          <FormGroup>
            <TextArea placeholder="Message" required></TextArea>
          </FormGroup>

          <SubmitButton type="submit">Let's Get In Touch</SubmitButton>
        </form>
      </LeftSection>

      <RightSection>
        <ImageContainer>
          <img src="/public/Contact/image 12.png" alt="Contact" />
        </ImageContainer>

        <ContactInfo>
          <InfoText>Please submit your inquiry and our App Development Strategist will contact you shortly</InfoText>

          <PhoneIcon>📞</PhoneIcon>

          <PhoneNumber>+1-(800) 826 8018</PhoneNumber>

          <Email>info@appicoders.com</Email>
        </ContactInfo>
      </RightSection>
    </ContactContainer>
  )
}
