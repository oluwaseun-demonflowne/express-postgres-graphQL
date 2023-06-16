const express = require('express');
const app = express();
const cors = require("cors");   
const resolvers = require("./resolvers/resolvers")
const typeDefs = require("./schemas/schemas")
const { ApolloServer } = require('apollo-server-express');
const { graphqlHTTP } = require('express-graphql');

const PORT = 5000;

app.use(cors());

app.use(express.json());

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  app.get('/', (req, res) => {
    res.send('GraphQL Server is running.');
  });

  app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`);
  });
}

startServer();