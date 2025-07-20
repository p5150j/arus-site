"use client";

import styled from 'styled-components';
import { theme } from '@/styles/theme';

const FooterSection = styled.footer`
  background: ${theme.colors.charcoal};
  padding: 1rem;
  text-align: center;
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.light};
  letter-spacing: ${theme.letterSpacing.wide};
  
  span {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export default function Footer() {
  return (
    <FooterSection>
      <FooterText>
        Made with ❤️ by <span>arus</span> · Ship code, not slides
      </FooterText>
    </FooterSection>
  );
}