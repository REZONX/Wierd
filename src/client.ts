import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const link = new HttpLink({
    uri:'',  
})

const cache = new InMemoryCache()

const client = new ApolloClient({
    link,
    cache,
})

const query = gql`
    {
        
    }
`