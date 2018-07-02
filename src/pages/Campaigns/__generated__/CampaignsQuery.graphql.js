/**
 * @flow
 * @relayHash 5c892d404c4c6f87fb3dab25b3a57558
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Campaign_campaign$ref = any;
export type CampaignsQueryVariables = {|
  first: number
|};
export type CampaignsQueryResponse = {|
  +campaigns: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +name: ?string,
        +$fragmentRefs: Campaign_campaign$ref,
      |}
    |}>
  |}
|};
*/


/*
query CampaignsQuery(
  $first: Int!
) {
  campaigns(first: $first) {
    edges {
      node {
        name
        ...Campaign_campaign
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Campaign_campaign on Campaign {
  id
  deletable
  brand {
    ... on Actor {
      avatarUrl
      name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CampaignsQuery",
  "id": null,
  "text": "query CampaignsQuery(\n  $first: Int!\n) {\n  campaigns(first: $first) {\n    edges {\n      node {\n        name\n        ...Campaign_campaign\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Campaign_campaign on Campaign {\n  id\n  deletable\n  brand {\n    ... on Actor {\n      avatarUrl\n      name\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": null,
        "direction": "forward",
        "path": [
          "campaigns"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "CampaignsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "campaigns",
        "name": "__Campaigns_campaigns_connection",
        "storageKey": null,
        "args": null,
        "concreteType": "CampaignConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CampaignEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Campaign",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "FragmentSpread",
                    "name": "Campaign_campaign",
                    "args": null
                  },
                  v2
                ]
              },
              v3
            ]
          },
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CampaignsQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "campaigns",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }
        ],
        "concreteType": "CampaignConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "CampaignEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Campaign",
                "plural": false,
                "selections": [
                  v1,
                  v5,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "deletable",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "brand",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Brand",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "avatarUrl",
                        "args": null,
                        "storageKey": null
                      },
                      v1,
                      v5
                    ]
                  },
                  v2
                ]
              },
              v3
            ]
          },
          v4
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "campaigns",
        "args": [
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          }
        ],
        "handle": "connection",
        "key": "Campaigns_campaigns",
        "filters": null
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e823fb527f726feb29d920544de0be60';
module.exports = node;
