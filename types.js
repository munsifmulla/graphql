const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//Token
const Token = new GraphQLObjectType({
  name: 'Token',
  fields: () => ({
    token:{type:GraphQLString}
  })
})

//Product Lists

const ProductList = new GraphQLObjectType({
  name: 'ProductList',
  fields:()=> ({
    pr_name:{type:GraphQLString},
    pr_image:{type:GraphQLString},
    base_price:{type:GraphQLString},
    product_id:{type:GraphQLString},
    slug:{type:GraphQLString},
    description:{type:GraphQLString}
  })
})

const Sample = new GraphQLObjectType({
  name:'Sample',
  fields:()=>({
    name:{type:GraphQLString}
  })
})



module.exports = {
  ProductList,
  Token,
  Sample
}