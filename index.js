const express = require('express');
const morgan = require('morgan')
const route = require('./src/routes');
const port = 9000

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`Server Started at port: ${port}` )
}) 



