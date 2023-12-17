import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql

  type Joke {
    categories: [String]
    created_at: String
    icon_url: String
    id: String
    updated_at: String
    url: String
    value: String
  }

  type Query {
    chuckNorrisCategories: [String]
    chuckNorrisJoke(category: String): Joke
  }
`;
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        chuckNorrisCategories: async () => {
            try {
                const response = await axios.get("https://api.chucknorris.io/jokes/categories");
                return response.data;
            }
            catch (error) {
                console.error("Error fetching Chuck Norris categories:", error);
                throw new Error("Failed to fetch Chuck Norris categories");
            }
        },
        chuckNorrisJoke: async (_, { category }) => {
            try {
                const apiUrl = category
                    ? `https://api.chucknorris.io/jokes/random?category=${category}`
                    : "https://api.chucknorris.io/jokes/random";
                const response = await axios.get(apiUrl);
                return response.data;
            }
            catch (error) {
                console.error("Error fetching Chuck Norris joke:", error);
                throw new Error("Failed to fetch Chuck Norris joke");
            }
        },
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
