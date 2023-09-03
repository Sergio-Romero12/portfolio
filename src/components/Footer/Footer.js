import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <br/>
      <SectionTitle>Contact me</SectionTitle>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:938163119">638163119</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sergioromerodepablo28@gmail.com">sergioromerodepablo28@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
        <LinkTitle>Social Media</LinkTitle>
        <SocialContainer>
          <SocialIcons href="https://www.linkedin.com/in/sergioromero28/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/Sergio-Romero12">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
