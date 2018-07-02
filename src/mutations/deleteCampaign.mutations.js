/* eslint-disable */
import { commitMutation, graphql } from 'react-relay';
import environment from '_environment';
import { ConnectionHandler } from 'relay-runtime';

const uuidv4 = require('uuid/v4');

const mutation = graphql`
  mutation deleteCampaignMutation($input: DeleteCampaignInput!) {
    deleteCampaign(input: $input) {
      campaign {
        id
      }
      clientMutationId
    }
  }
`;

export const DeleteCapaignMutation = (campaignId) => {
  const variables = {
    input: {
      id: uuidv4(),
      campaignId,
    },
  };

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log(response);
      },
      onError: err => console.error(err),
      updater: (store) => {
        const storeRoot = store.getRoot();
        const connection = ConnectionHandler.getConnection(
          storeRoot,
          'Campaigns_campaigns',
        );
        if (connection) {
          ConnectionHandler.deleteNode(connection, campaignId);
        }
      },
    },
  );
};

export default DeleteCapaignMutation;
