import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyatic1dnt01z4aakv87ft/master',
    cache: new InMemoryCache()
})