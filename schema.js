const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

const env = require('./env.js');
const axios = require('axios');
const {ProductList, Token, Sample} = require('./types');
const md5Hash = require('md5-hash');
const store = require('data-store')('site');

const sample = [
  {name:'Mike'},
  {name:'Shen'},
  {name:'gru'},
  {name:'helio'}
]

//Root Query
const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:{
    //get Token
    token:{
      type:Token,
      resolve() {
        if (!store.hasOwn("site_token")) {
          return axios.post(env.url.token_url, {
            deviceid: env.deviceId,
            hashkey: md5Hash.default(env.SALT + env.deviceId)
          })
            .then((res) => {
              store.set("site_token", res.data.token);
              return res.data;
            })
        }
        else{
          // console.log(store.get("site_token"));
          return {
            token:store.get("site_token")
          }
        }
      }
    },

    productList:{
      type:new GraphQLList(ProductList),
      resolve(){
        // return products;
        return axios.get(env.url.pr_list)
          .then((res)=>{
            let resp = [];
            res.data.data.map((x)=> {
              let temp = {};
              Object.assign(temp, x.product_master);
              Object.assign(temp, x.product_merchantdising);
              Object.assign(temp, x.product_pricing);
              Object.assign(temp, x.product_inventory);
              resp.push(temp)
            });
            console.log("\n----------------\n",resp,"\n----------------\n");
            return resp;
          })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});