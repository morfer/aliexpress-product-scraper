const scrape = require('aliexpress-product-scraper');
const { extendWith } = require('lodash');

/** GET command line argument for product_id */
var product_id = process.argv[2];

if(product_id !== null) {
  var product = scrape(product_id);

  product.then(res => {
    /** Output the result to console as JSON */
    console.log(JSON.stringify(res, null, 2));
  });
}
else {
  return false;
}