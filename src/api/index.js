const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

function fetchQuery(
  operation,
  variables,
) {
  const jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZDZiNjRiZi1mODAxLTRmYzQtYjhkMi01NTMzOWJiZjE5ZGMifQ.xkXko-RHn1b7EWxS-X9tPDVnZKH_R0OYKFOkMR5ZgxU';

  return fetch('https://test-api.insense.pro/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store,
});
