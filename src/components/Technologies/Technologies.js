import React from 'react';
import { DiHtml5, DiPython, DiUnitySmall, DiCodeBadge} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      During my studies I have worked with several technologies.
      Here are the ones I have more experience with.
      
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Python is the first language that I learnt. <br />
            I did some software and AI projects.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS and JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCodeBadge size="3rem" />
        <ListContainer>
          <ListTitle>C, C++ and C#</ListTitle>
          <ListParagraph>
            I have done some projects <br />
            related to optimisation
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem" />
        <ListContainer>
          <ListTitle>Unity and <br /> ML-Agents</ListTitle>
          <ListParagraph>
            Tools used to create <br />
            my Bachelor's Thesis
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
