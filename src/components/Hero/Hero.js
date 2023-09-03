import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
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
      <form method="get" action="#contact">
        <Button>Contact me</Button>
      </form>
    </LeftSection>
  </Section>
);

export default Hero;