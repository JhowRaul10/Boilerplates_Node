const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

require('./src/routes/post')(app)

const port = process.env.PORT || 3000

app.listen(port)