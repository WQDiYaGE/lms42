const express = require("express");
const cors = require("cors");

const connection = require("./src/config/connection");

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());



connection();


app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});