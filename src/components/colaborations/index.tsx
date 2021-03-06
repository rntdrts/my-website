import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Container,
  Text,
  Row,
  Column,
  Card,
  CardDescription,
  CardTitle,
  CardText,
} from './styles';

import Uniplaces from '../../svgs/uniplaces.svg';
import SigMira from '../../svgs/sigmira.svg';
import UA from '../../svgs/ua.svg';
import BeUbi from '../../svgs/beubi.svg';

const Skills = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      uniplaces: file(relativePath: { eq: "uniplaces.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mira: file(relativePath: { eq: "sig-mira.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      geopredial: file(relativePath: { eq: "geopredial.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Row>
        <Text>I’m proud to have collaborated in these.</Text>
      </Row>
      <Row flex={true}>
        <Column>
          <Row>
            <Card>
              <Img
                fluid={data.uniplaces.childImageSharp.fluid}
                alt='Gatsby Docs are awesome'
              />
              <CardDescription>
                <CardTitle>Uniplaces</CardTitle>
                <CardText>Fullstack Developer - 2017</CardText>
              </CardDescription>
            </Card>
          </Row>
        </Column>
        <Column>
          <Card>
            <Img
              fluid={data.mira.childImageSharp.fluid}
              alt='Gatsby Docs are awesome'
            />
            <CardDescription>
              <CardTitle>SIG Mira</CardTitle>
              <CardText>Lead Developer - 2015</CardText>
            </CardDescription>
          </Card>
        </Column>
        <Column>
          <Card>
            <Img
              fluid={data.geopredial.childImageSharp.fluid}
              alt='Gatsby Docs are awesome'
            />
            <CardDescription>
              <CardTitle>Geopredial</CardTitle>
              <CardText>Consultant Developer - 2015</CardText>
            </CardDescription>
          </Card>
        </Column>
      </Row>
      <Row flex={true}>
        <Column>
          <Uniplaces />
        </Column>
        <Column>
          <SigMira />
        </Column>
        <Column>
          <BeUbi />
        </Column>
        <Column>
          <UA />
        </Column>
      </Row>
    </Container>
  );
};

export default Skills;
