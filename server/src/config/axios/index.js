const axios = require('axios');

module.exports = axios.create({
    baseURL: process.env.CLEARBIT_ADDRESS,
    headers: {'Authorization': 'Bearer sk_30240e2d1dfc1d73d26ab80390d1fd49'}
});
