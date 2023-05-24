import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { createRoot } from 'react-dom/client';
import { onError } from 'apollo-link-error';
import { RetryLink} from '@apollo/client/link/retry';
import './index.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App';
//import { create } from '../../server/models/shelter';

// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql', // Replace with your GraphQL server endpoint
//   cache: new InMemoryCache(),
// });

// const httpLink = createHttpLink({
//   uri: 'http://localhost:3001/graphql',
// });

// const authLink = setContext((_, {headers} )=> {
//   const token = localStorage.getItem('token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? 'Bearer ${token}' : '',
//     },
//   };
// });

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   // Handle any errors that occur during the GraphQL request
//   if (graphQLErrors) {
//     graphQLErrors.forEach(({ message, locations, path }) => {
//       console.error(`[GraphQL Error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
//     });
//   }
//   if (networkError) {
//     console.error(`[Network Error]: ${networkError}`);
//   }
// });

// const retryLink = new RetryLink({
//   attempts: {
//     max: 5,
//     retryIf: (error, _operation) => !!error,
//   },
// });

// const link = ApolloLink.from([errorLink, retryLink, authLink, httpLink]);

// const apolloClient = new ApolloClient({
//   link,
//   cache: new InMemoryCache(),
// });


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// );


