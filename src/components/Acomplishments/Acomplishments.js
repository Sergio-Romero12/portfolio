import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 8.6, text: 'Degree Average Grade'},
  { title: 'Honour', text: 'Spreadsheets. Advanced level', },
  { title: 'Honour', text: 'Artificial Neural Networks', },
  { title: 'Honour', text: 'Computer Architecture', },
  { title: 'Honour', text: 'Applied Differential Calculus', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br/>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
       {data.map((card, index) => (
          <Box key ={index}>
            <BoxTitle>{card.title}</BoxTitle>
            <BoxText>{card.text}</BoxText>
          </Box>
       ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
