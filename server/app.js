const express = require("express");

const app = express();

app.listen(8080, () => {
    return console.log(`Express is listening at http://localhost:${8080}`);
});
