import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {

  const checkSource = (source) => {
    if(source !== ""){
      return <ExternalLinks href={source}>Code</ExternalLinks>;
    }
  }

  return(
    <Section nopadding id="project">
      <div style={{padding: '0 48px 0'}}>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      </div>
      <GridContainer>
        {projects.map(({id, image, title, description, tags, source}) => (
          <BlogCard key = {id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList >
              {checkSource(source)}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;