const http= require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('WELCOME TO HOME PAGE')
        /* res.end('Welcome to home page') */
    }
    if(req.url==='/about'){
        res.end('Welcome to About page')
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h1>OOPSS ARE YOU LOST KIDDO?</h1>
    <a href='/'>Go Home</a>
    <h3>Thank me later</h3>
    <p>Anyway what you were looking wasn't</p>`)
})

server.listen(5000)