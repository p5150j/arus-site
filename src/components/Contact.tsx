"use client";

import { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { theme } from '@/styles/theme';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  75% {
    transform: translateY(15px) rotate(-2deg);
  }
`;

const Section = styled.section`
  background: #080808;
  color: white;
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const BackgroundCanvas = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
`;

const AnimatedGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 100px 100px;
  transform: translateZ(0);
  opacity: 0.3;
`;

const FloatingElement = styled.div<{ $delay: number; $size: number; $left: string; $top: string }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  left: ${props => props.$left};
  top: ${props => props.$top};
  animation: ${float} ${props => 20 + props.$delay * 2}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(20px);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(4rem, 8vw, 8rem);
  align-items: start;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const TextContent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Title = styled.h2`
  font-family: ${theme.fonts.serif};
  font-size: clamp(3rem, 5vw, 4rem);
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  line-height: 1;
  position: relative;
  
  span {
    display: inline-block;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${theme.colors.accent};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  
  &:hover span::after {
    transform: scaleX(1);
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  opacity: 0.8;
  margin-bottom: 3rem;
  font-weight: 300;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
  position: relative;
  padding: 1rem 0;
  
  &::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: ${theme.colors.accent};
    transition: height 0.3s ease;
  }
  
  &:hover {
    transform: translateX(5px);
    
    &::before {
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
    }
    
    .icon {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: all 0.3s ease;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: 0.875rem;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.span`
  font-size: 1.125rem;
  font-weight: 400;
`;

const FormContainer = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: 0.2s;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1.25rem 1.5rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.05);
    border-color: ${theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const Label = styled.label`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  pointer-events: none;
  transition: all 0.3s ease;
  
  ${Input}:focus ~ &,
  ${Input}:not(:placeholder-shown) ~ &,
  ${TextArea}:focus ~ &,
  ${TextArea}:not(:placeholder-shown) ~ & {
    top: -10px;
    left: 1rem;
    font-size: 0.75rem;
    background: ${theme.colors.charcoal};
    padding: 0 0.5rem;
    color: ${theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 1.25rem 3rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  align-self: flex-start;
  border-radius: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${theme.colors.accent};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${theme.colors.accent};
    border-radius: 50px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
    
    &::before {
      width: 300px;
      height: 300px;
    }
    
    &::after {
      opacity: 0.1;
      animation: ${pulse} 1.5s ease-in-out infinite;
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  span {
    position: relative;
    z-index: 1;
  }
`;

const FloatingIcon = styled.div<{ $x: number; $y: number }>`
  position: absolute;
  font-size: 2rem;
  opacity: 0.05;
  animation: ${float} 20s ease-in-out infinite;
  left: ${props => props.$x}%;
  top: ${props => props.$y}%;
  pointer-events: none;
  user-select: none;
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const myForm = e.target as HTMLFormElement;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => {
        alert("Thanks for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((error) => alert(error));
  };

  return (
    <Section ref={sectionRef} id="contact">
      <BackgroundCanvas />
      <AnimatedGrid 
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      />
      
      <FloatingElement $delay={0} $size={300} $left="10%" $top="20%" />
      <FloatingElement $delay={2} $size={200} $left="80%" $top="70%" />
      <FloatingElement $delay={4} $size={250} $left="50%" $top="10%" />
      
      <FloatingIcon $x={15} $y={25}>💡</FloatingIcon>
      <FloatingIcon $x={85} $y={35}>🚀</FloatingIcon>
      <FloatingIcon $x={45} $y={75}>⚡</FloatingIcon>
      
      <Container>
        <ContentGrid>
          <TextContent>
            <Title>
              <span>Let&apos;s Build</span> <br />
              <span>Something Extraordinary</span>
            </Title>
            
            <Description>
              Ready to transform your technical challenges into competitive advantages? 
              Let&apos;s discuss how surgical execution can accelerate your portfolio.
            </Description>
            
            <ContactInfo>
              <ContactItem href="mailto:patrick@ortell.com">
                <ContactIcon className="icon">📧</ContactIcon>
                <ContactText>
                  <ContactLabel>Email</ContactLabel>
                  <ContactValue>patrick@ortell.com</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem href="tel:+1234567890">
                <ContactIcon className="icon">📱</ContactIcon>
                <ContactText>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactValue>+1 (234) 567-890</ContactValue>
                </ContactText>
              </ContactItem>
              
              <ContactItem href="https://linkedin.com/in/patrickortell" target="_blank">
                <ContactIcon className="icon">💼</ContactIcon>
                <ContactText>
                  <ContactLabel>LinkedIn</ContactLabel>
                  <ContactValue>linkedin.com/in/patrickortell</ContactValue>
                </ContactText>
              </ContactItem>
            </ContactInfo>
          </TextContent>
          
          <FormContainer>
            <Form onSubmit={handleSubmit} data-netlify="true" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <Label>Your Name</Label>
              </FormGroup>
              
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <Label>Email Address</Label>
              </FormGroup>
              
              <FormGroup>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=" "
                />
                <Label>Company / Fund</Label>
              </FormGroup>
              
              <FormGroup>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <Label>Your Message</Label>
              </FormGroup>
              
              <SubmitButton type="submit">
                <span>Send Message</span>
              </SubmitButton>
            </Form>
          </FormContainer>
        </ContentGrid>
      </Container>
    </Section>
  );
}