const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios');
const cors = require('cors');

const api = require('./api/api');

app.use(cors({origin: "*"}))
app.use('/api', api);

app.get('/', (req, res) => {
  res.send('This is my truth or dare api');
});

app.listen(3000, () => console.log('Server started on port 3000'))