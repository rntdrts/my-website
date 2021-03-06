import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
  Container,
  ImageContainer,
  ImageWrapper,
  Title,
  Content,
  Description,
  Button,
} from './styles';
import Arrow from '../../svgs/arrow.svg';

const Presentation = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
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
      <ImageContainer>
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </ImageWrapper>
      </ImageContainer>
      <Content>
        <Title>Talk is cheap.</Title>
        <Title fontWeight={700}>show me the code</Title>
        <Description>
          I&apos;m a fullstack developer who loves building great products.{' '}
          <br />I have 5+ years of experience in the field, and I love what I
          do. <br />
          Currently working at Uniplaces.
        </Description>
        <Button>
          Check my latest work <Arrow />
        </Button>
      </Content>
    </Container>
  );
};

export default Presentation;
