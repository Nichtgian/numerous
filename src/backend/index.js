const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Initial");
});

let server = app.listen(4200, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(
        "Example app listening at http://%s:%s", 
        host == "::" ? "localhost" : host, 
        port
    );
});