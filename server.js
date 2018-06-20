const express = require('express');
const expressGraphQL = require('express-graphql');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;

const app = express();

app.listen(PORT, () => {
  console.log("Server running at "+PORT);
  console.log(process.env.NODE_ENV);
})

app.use(cors());
app.use('/graphql',cors(), bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));