const cluster = require('cluster');
const http = require('http');
const OS = require('os');

console.log(`Number of CPUs is ${OS.cpus().length}`);

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
    console.log(`Worker ${process.pid} started`);
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to the home page</h1>');
            res.end();
        } else if (req.url === '/slow') {
            for (let i = 0; i < 6000000000; i++) {};
            res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write('<h1>Welcome to the slow page</h1>');
            res.end();
        }
    });
    
    server.listen(3000, () => console.log('Server is running on port 3000'));
}