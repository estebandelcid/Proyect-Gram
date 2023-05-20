import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Context from "./Context";

const httpLink = createHttpLink({
  uri: "https://petgram-esteban-estebandelcid.vercel.app/graphql",
});

const authLink = setContext(({ headers }) => {
  const token = window.sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: (error) => {
    const { networkError } = error;
    if (networkError && networkError.result.code == "invalid_token") {
      window.sessionStorage.removeItem("token");
      __APOLLO_CLIENT__.resetStore();
      window.location.href = "/";
    }
  },
});

// const client = new ApolloClient({
//   uri: 'https://petgram-esteban-estebandelcid.vercel.app/graphql',
//   cache: new InMemoryCache(),
//   request: operation => {
//     const token = window.sessionStorage.getItem('token')
//     const authorization = token ? `bearer ${token}` : "";
//     operation.setContext ({
//       headers: {
//         authorization
//       }
//     })
//   },
//   onError: error => {
//     const {networkError} = error
//     if (networkError && networkError.result.code == 'invalid_token'){
//       window.sessionStorage.removeItem('token')
//       window.location.href= '/'
//     }
//   }
// });

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
);
