require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middle ware
app.use(bodyParser.json());

// Cors
app.use(cors());

const port = process.env.PORT || process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);