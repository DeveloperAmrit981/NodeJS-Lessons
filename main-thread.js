const http = require('http');
const {Worker} = require('worker_threads');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHeader(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the home page</h1>');
        res.end();
    } else if (req.url === '/slow') {
        const worker = new Worker('./worker-thread.js');
        worker.on('message', (j) => {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write(`<h1>Slow page ${j}</h1>`)
            res.end();
        });
    }
})

server.listen(3000, () => console.log('Server is running on port 3000'));