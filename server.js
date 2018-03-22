const express = require('express');
const expressGraphQL = require('express-graphql');
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

const schema = require('./schema');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.listen(4000, () => {
  console.log("Server running at 4000...")
})

app.use(cors());

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   //intercepts OPTIONS method
//   if ('OPTIONS' === req.method) {
//     //respond with 200
//     res.send(resp);
//   } else {
//     //move on
//     next();
//   }
// });

app.use('/graphql',cors(), bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));