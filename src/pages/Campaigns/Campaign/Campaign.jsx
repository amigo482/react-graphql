/* eslint-disable */

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import deleteCampaign from '_mutations/deleteCampaign.mutations';

const Campaign = ({ campaign: { deletable, id, brand: { avatarUrl, name } } }) => {
  const onClickDelete = () => {
    if (deletable) {
      deleteCampaign(id);
    } else {
      alert(deletable);
    }
  }
  return (
    <li style={{ height: '50px' }}>
      <span style={{ cursor: 'pointer' }} onClick={onClickDelete}> x </span>
      <img src={avatarUrl} style={{ height: '100%' }} /> {name}
    </li>
  );
}

export default createFragmentContainer(
  Campaign,
  graphql`
    fragment Campaign_campaign on Campaign {
      id
      deletable
      brand {
        ... on Actor {
          avatarUrl
          name
        }
      }
    }
  `,
);
