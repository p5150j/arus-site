"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';
import { smoothScrollTo } from '@/utils/smoothScroll';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${props => props.$scrolled ? '1.25rem 0' : '2rem 0'};
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  mix-blend-mode: ${props => props.$scrolled ? 'normal' : 'difference'};
  
  ${props => props.$scrolled && css`
    background: rgba(247, 243, 240, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 1px 0 rgba(26, 26, 26, 0.05);
  `}
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)<{ $scrolled: boolean }>`
  font-family: ${theme.fonts.serif};
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
  color: ${props => props.$scrolled ? theme.colors.charcoal : 'white'};
  position: relative;
  transition: all 0.3s ease;
  letter-spacing: ${theme.letterSpacing.tight};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.accent};
    transition: width 0.3s ease;
  }
  
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 3rem);
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a<{ $scrolled: boolean; $active: boolean }>`
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
  position: relative;
  color: ${props => props.$scrolled ? theme.colors.textPrimary : 'white'};
  text-transform: lowercase;
  letter-spacing: ${theme.letterSpacing.wide};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &::before {
    content: attr(data-number);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    font-family: ${theme.fonts.mono};
    font-size: 0.65rem;
    color: ${theme.colors.accent};
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 100%;
    height: 2px;
    background: ${theme.colors.accent};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: center;
  }
  
  ${props => props.$active && css`
    &::after {
      transform: translateX(-50%) scaleX(0.8);
      opacity: 0.7;
    }
  `}
  
  &:hover {
    color: ${props => props.$scrolled ? theme.colors.accent : 'white'};
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
      transform: translateX(-50%) scale(1) translateY(-5px);
    }
    
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    display: block;
  }
`;

const MenuIcon = styled.div<{ $scrolled: boolean; $open: boolean }>`
  width: 24px;
  height: 20px;
  position: relative;
  
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.$scrolled || props.$open ? theme.colors.charcoal : 'white'};
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      top: 0;
      transform: ${props => props.$open ? 'rotate(45deg) translateY(9px)' : 'none'};
    }
    
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      width: ${props => props.$open ? '0' : '70%'};
      opacity: ${props => props.$open ? 0 : 1};
    }
    
    &:nth-child(3) {
      bottom: 0;
      width: ${props => props.$open ? '100%' : '85%'};
      transform: ${props => props.$open ? 'rotate(-45deg) translateY(-9px)' : 'none'};
    }
  }
  
  &:hover span {
    width: 100%;
  }
`;

const ProgressBar = styled.div<{ $progress: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 107, 53, 0.1);
  z-index: 1001;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background: ${theme.colors.accent};
    transition: width 0.3s ease;
  }
`;

const MobileMenuOverlay = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${theme.colors.beige};
  z-index: 999;
  transform: translateX(${props => props.$open ? '0' : '100%'});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (min-width: ${theme.breakpoints.mobile}) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const MobileMenuClose = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${theme.colors.charcoal};
    transition: all 0.3s ease;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
  
  &:hover::before,
  &:hover::after {
    background: ${theme.colors.accent};
  }
`;

const MobileNavLink = styled.a<{ $active: boolean }>`
  font-size: ${theme.fontSizes['2xl']};
  font-weight: ${theme.fontWeights.medium};
  text-decoration: none;
  color: ${theme.colors.charcoal};
  text-transform: lowercase;
  letter-spacing: ${theme.letterSpacing.wide};
  position: relative;
  padding: 0.5rem 0;
  
  ${props => props.$active && css`
    color: ${theme.colors.accent};
  `}
  
  &::after {
    content: attr(data-number);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-family: ${theme.fonts.mono};
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.accent};
    opacity: 0.5;
  }
`;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      setScrolled(scrollY > 100);
      
      // Calculate scroll progress
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      
      // Determine active section
      const sections = ['problem', 'services', 'cases', 'global-presence', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
    setMobileMenuOpen(false); // Close mobile menu on click
  };

  const navItems = [
    { href: '#problem', label: 'challenge', number: '01' },
    { href: '#services', label: 'approach', number: '02' },
    { href: '#cases', label: 'work', number: '03' },
    { href: '#global-presence', label: 'global', number: '04' },
    { href: '#contact', label: 'connect', number: '05' }
  ];

  return (
    <>
      <ProgressBar $progress={scrollProgress} />
      <Nav $scrolled={scrolled}>
        <NavContainer>
          <Logo href="/" $scrolled={scrolled}>
            arus
          </Logo>

          <NavMenu>
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                $scrolled={scrolled}
                $active={activeSection === item.href.slice(1)}
                data-number={item.number}
              >
                {item.label}
              </NavLink>
            ))}
          </NavMenu>
          
          <MenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <MenuIcon $scrolled={scrolled} $open={mobileMenuOpen}>
              <span />
              <span />
              <span />
            </MenuIcon>
          </MenuButton>
        </NavContainer>
      </Nav>
      
      <MobileMenuOverlay $open={mobileMenuOpen}>
        <MobileMenuContent>
          <MobileMenuClose onClick={() => setMobileMenuOpen(false)} />
          {navItems.map((item) => (
            <MobileNavLink
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              $active={activeSection === item.href.slice(1)}
              data-number={item.number}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenuContent>
      </MobileMenuOverlay>
    </>
  );
}