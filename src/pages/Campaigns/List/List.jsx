/* eslint-disable */

import React, { Fragment, Component } from 'react';
import {
  createPaginationContainer,
  graphql,
} from 'react-relay';

import Campaign from './Campaign';


class List extends Component {
  constructor() {
    super();
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(
      2,
      error => {
        console.log(error);
      },
    );
  }

  render() {
    const { campaigns: { campaigns: { edges } } } = this.props;
    const campaigns = edges.map(
      (element, index) => <Campaign key={index} campaign={element.node} />
    );

    return (
      <Fragment>
        {campaigns}
        <button
          onClick={this.loadMore}
        >
          Load more
        </button>
      </Fragment>
    )
  }
}

export default createPaginationContainer(List,
  graphql`
    fragment List_campaigns on Query
    @argumentDefinitions(
      count: {type: "Int", defaultValue: 2}
      cursor: {type: "String"}
      orderBy: {type: "String", defaultValue: name}
    ) {
      campaigns(first: $count, after: $cursor, orderBy: $orderBy)
        @connection(key: "Campaigns_campaigns", filters: []) {
        edges {
          node {
            name
            ...Campaign_campaign
          }
        }
      }
    }
  `,
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.campaigns.campaigns;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor, orderBy }) {
      return {
        count,
        cursor,
        orderBy,
      };
    },
    query: graphql`
      query ListPaginationQuery(
        $count: Int
        $cursor: String
        $orderBy: String
      ) {
        ...List_campaigns @arguments(count: $count, cursor: $cursor, orderBy: $orderBy )
      }
    `
  }
);
