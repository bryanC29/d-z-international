// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API}/graphql`, // ⬅️ Replace with your actual backend API URL
  }),
  cache: new InMemoryCache(),
});

export default client;
