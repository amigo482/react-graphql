/**
 * @flow
 * @relayHash 2e18a8d7d995d61ac0182b9d8b3fb4a4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type List_campaigns$ref = any;
export type CampaignsQueryVariables = {||};
export type CampaignsQueryResponse = {|
  +$fragmentRefs: List_campaigns$ref
|};
*/


/*
query CampaignsQuery {
  ...List_campaigns
}

fragment List_campaigns on Query {
  campaigns(first: 2, orderBy: "name") {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
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
  "text": "query CampaignsQuery {\n  ...List_campaigns\n}\n\nfragment List_campaigns on Query {\n  campaigns(first: 2, orderBy: \"name\") {\n    edges {\n      node {\n        name\n        ...Campaign_campaign\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Campaign_campaign on Campaign {\n  id\n  deletable\n  brand {\n    ... on Actor {\n      avatarUrl\n      name\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CampaignsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "List_campaigns",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CampaignsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "campaigns",
        "storageKey": "campaigns(first:2,orderBy:\"name\")",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "name",
            "type": "String"
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
                  v0,
                  v1,
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
                      v0,
                      v1
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
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
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "campaigns",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2,
            "type": "Int"
          },
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "name",
            "type": "String"
          }
        ],
        "handle": "connection",
        "key": "Campaigns_campaigns",
        "filters": []
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a93bc1549c3aa74014904e60add88d8f';
module.exports = node;
