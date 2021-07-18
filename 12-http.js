const http = require('http')

const server = http.createServer((req, res)=>{
    // console.log(req)
    // res.write('welcome')
    if(req.url === '/'){
        // res.write('welcome ')
        // res.end()
        res.end('welcaome')
    }
    if(req.url === '/about'){
        res.write('about ')
        res.end()
    }
    // res.write('welcome asdasd ')
    // res.end()
})

server.listen(3000)