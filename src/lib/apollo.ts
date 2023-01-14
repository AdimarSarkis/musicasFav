import {ApolloClient, InMemoryCache} from '@apollo/client';
export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clcvbdauh0vkz01uk4lawb2b3/master',
    cache: new InMemoryCache()
})