/* eslint-disable */

import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from '_environment';

import List from './List';

class Campaigns extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="Campaigns" />
        <QueryRenderer
          environment={environment}
          query={graphql`
            query CampaignsQuery {
              ...List_campaigns
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return (
                <ul>
                  <List campaigns={props} />
                </ul>
              );
            }
            return <div>Loading</div>;
          }}
        />
      </Fragment>
    );
  }
}

export default Campaigns;