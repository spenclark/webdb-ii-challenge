const server = require('./api/server')
server.listen(2011, () => {
    console.log(`server running on port 2011`)
})