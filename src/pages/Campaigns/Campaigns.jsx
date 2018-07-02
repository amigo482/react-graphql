/* eslint-disable */

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from '_environment';
import Campaign from './Campaign';

const first = 50;

const Campaigns = () => (
  <Fragment>
    <Helmet title="Home" />
    <QueryRenderer
      environment={environment}
      query={graphql`
        query CampaignsQuery($first: Int!) {
          campaigns(first: $first) @connection(key: "Campaigns_campaigns") {
            edges {
              node {
                name
                ...Campaign_campaign
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
          return (
            <ul>
              {
                props.campaigns.edges.map((element, index) => <Campaign key={index} campaign={element.node} />)
              }
            </ul>
          );
        }
        return <div>Loading</div>;
      }}
    />
  </Fragment>
);

export default Campaigns;
