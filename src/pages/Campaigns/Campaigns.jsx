import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from '_environment';

const first = 50;

const Campaigns = () => (
  <Fragment>
    <Helmet title="Home" />
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CampaignsQuery($first: Int!) {
          campaigns(first: $first) {
            edges {
              node {
                name
              }
            }
          }
        }
      `}
      variables={{ first }}
      render={({ error, props }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return props;
        }
        return <div>Loading</div>;
      }}
    />
  </Fragment>
);

export default Campaigns;
