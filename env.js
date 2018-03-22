
module.exports = {
  SALT: 'N6X9F825ULdk9DYDOVQB48OzTR5pP0Jz',
  deviceId: Math.random().toString(36).substring(12),

  url:{
    token_url: 'https://node.licious.in/api/generate_token',
    pr_list: 'https://node.licious.in/api/catalog/products/all?cat_id=1&hub_id=1&source=mobilesite'
    }
};