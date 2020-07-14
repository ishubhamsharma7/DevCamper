const express = require('express')
const dotenv = require('dotenv')

//loading evn var
dotenv.config({ path: './config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000

app.listen(PORT,
    console.log("listing on port " + PORT)
)