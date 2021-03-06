import React from 'react';
import { WindowLocation } from '@reach/router';

import Layout from '../components/layout/index';
import SEO from '../components/seo';
import Presentation from '../components/presentation/index';
import Skills from '../components/skills/index';
import Collaborations from '../components/collaborations/index';
import Contributions from '../components/contributions/index';

type Props = {
  location: WindowLocation;
};

const Homepage: React.FC<Props> = ({ location }) => (
  <Layout location={location}>
    <SEO title='Renato Duarte - Homepage' />
    <Presentation />
    <Skills />
    <Collaborations />
    <Contributions />
  </Layout>
);

export default Homepage;
