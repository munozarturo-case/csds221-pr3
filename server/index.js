const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middle ware
app.use(bodyParser.json());

// Cors
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));

