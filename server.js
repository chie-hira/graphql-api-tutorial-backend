const { apolloServer } = require('apollo-server');

const server = new apolloServer({});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
