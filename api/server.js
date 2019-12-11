const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet')
// const carRouter = require('./router.js')

const server = express();

server.use(helmet())
server.use(express.json())
server.use(morgan())

// server.use('/api/cars', router)

server.get('/', (req,res) => {
    res.status(200).json(`Server is sane`)
})

module.exports = server