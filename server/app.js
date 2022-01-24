require('dotenv').config();
const express = require("express");
const config = require('./src/config/express');
const useClearbitMiddlware = require('./src/services/clearbit-api');
const app = express();
config(app);
useClearbitMiddlware(app);

app.listen(process.env.PORT, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});
