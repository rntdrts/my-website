import React from 'react';

import Layout from '../components/layout/index';
import SEO from '../components/seo';
import { WindowLocation } from '@reach/router';

type Props = {
  location: WindowLocation;
};

const NotFoundPage: React.FC<Props> = ({ location }) => (
  <Layout location={location}>
    <SEO title='404: Not found' />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
