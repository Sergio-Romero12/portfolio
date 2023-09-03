import React from 'react';

import { Section, SectionText, SectionTitle, SectionButton } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br/>
        I am Sergio Romero <br/>
        and Welcome to my Portfolio!
      </SectionTitle>
      <SectionText>
        I created this site to show who I am and what I have done in a more entertaining way. If you are interested, just scroll down and discover my journey.
      </SectionText>
      <SectionButton>
        <form method="get" action="/Cv_SergioRomeroDePablo_en.pdf" target="_blank">
          <Button type="submit">Download CV<br/>in English</Button>
        </form>
        <form method="get" action="/Cv_SergioRomeroDePablo_es.pdf" target="_blank">
          <Button type="submit">Download CV<br/>in Spanish</Button>
        </form>
      </SectionButton>
    </LeftSection>
  </Section>
);

export default Hero;