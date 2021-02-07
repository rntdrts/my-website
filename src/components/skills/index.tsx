import React from 'react';

import {
  Container,
  Column,
  Title,
  Description,
  TechRow,
  TechColumn,
  Tech,
} from './styles';

import CurvedSection from '../curved-section/index';
import FrontEnd from '../../svgs/frontend.svg';
import BackEnd from '../../svgs/backend.svg';
import DevOps from '../../svgs/devops.svg';

const Skills = (): JSX.Element => (
  <CurvedSection>
    <Container>
      <Column>
        <BackEnd />
        <Title>Back-end</Title>
        <Description>
          I enjoy the challanges of defining business logic and structure code
          so it’s testable and re-usable.
        </Description>
        <TechColumn>
          <TechRow>
            <Tech>NodeJS</Tech>
            <Tech>PHP</Tech>
          </TechRow>
          <TechRow>
            <Tech>Go</Tech>
            <Tech>Python</Tech>
          </TechRow>
        </TechColumn>
      </Column>
      <Column>
        <FrontEnd />
        <Title>Front-end</Title>
        <Description>
          I love to build interactive front-end from scratch that enhances the
          user experience with a simple and beautiful UI.
        </Description>
        <TechColumn>
          <TechRow>
            <Tech>ReactJS</Tech>
            <Tech>NextJS</Tech>
          </TechRow>
          <TechRow>
            <Tech>Gatsby</Tech>
            <Tech>Vue</Tech>
          </TechRow>
        </TechColumn>
      </Column>
      <Column>
        <DevOps />
        <Title>DevOps</Title>
        <Description>
          I like to be able to deploy my own apps, but also to empower my fellow
          collegues with the tools to build and deploy new features.
        </Description>
        <TechColumn>
          <TechRow>
            <Tech>AWS</Tech>
            <Tech>Terraform</Tech>
          </TechRow>
          <TechRow>
            <Tech>Docker</Tech>
            <Tech>Linux</Tech>
          </TechRow>
        </TechColumn>
      </Column>
    </Container>
  </CurvedSection>
);

export default Skills;
