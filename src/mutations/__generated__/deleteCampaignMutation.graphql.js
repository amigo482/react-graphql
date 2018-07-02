/**
 * @flow
 * @relayHash 3143713dd123b26113ac4bac84eb6955
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCampaignInput = {
  campaignId: string,
  clientMutationId?: ?string,
  id?: ?string,
};
export type deleteCampaignMutationVariables = {|
  input: DeleteCampaignInput
|};
export type deleteCampaignMutationResponse = {|
  +deleteCampaign: ?{|
    +campaign: {|
      +id: string
    |},
    +clientMutationId: ?string,
  |}
|};
*/


/*
mutation deleteCampaignMutation(
  $input: DeleteCampaignInput!
) {
  deleteCampaign(input: $input) {
    campaign {
      id
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCampaignInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCampaign",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteCampaignInput!"
      }
    ],
    "concreteType": "DeleteCampaignPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "campaign",
        "storageKey": null,
        "args": null,
        "concreteType": "Campaign",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "deleteCampaignMutation",
  "id": null,
  "text": "mutation deleteCampaignMutation(\n  $input: DeleteCampaignInput!\n) {\n  deleteCampaign(input: $input) {\n    campaign {\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "deleteCampaignMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteCampaignMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '083f1c9b501ceed8c98259ee5fcb7333';
module.exports = node;
