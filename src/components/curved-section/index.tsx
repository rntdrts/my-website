import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container, Content } from './styles';

type Props = {
  children?: ReactNode | ReactNode[];
};

const CurvedSection: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      subtractPlaceholder: file(relativePath: { eq: "subtract.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      additionPlaceholder: file(relativePath: { eq: "addition.png" }) {
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
      {!!data?.subtractPlaceholder?.childImageSharp?.fluid && (
        <Img fluid={data.subtractPlaceholder.childImageSharp.fluid} />
      )}
      <Content>{children}</Content>
      {!!data?.subtractPlaceholder?.childImageSharp?.fluid && (
        <Img fluid={data.additionPlaceholder.childImageSharp.fluid} />
      )}
    </Container>
  );
};

export default CurvedSection;
