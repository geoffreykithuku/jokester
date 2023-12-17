import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";
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
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
