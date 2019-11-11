'use strict';

const express = require('express');

const app = express();

app.use(express.static('.'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Please access to http://localhost:3000/2019/speakers')
});
