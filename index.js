// // // // function greet(name) {
// // // //     console.log(`Hello, ${name}!`);
// // // // }

// import { set } from "mongoose";

// // // // function higherOrderFunction(callbackFunction) {
// // // //     const name = 'Amrit';
// // // //     callbackFunction(name);
// // // // }

// // // // higherOrderFunction(greet);

// // // const EventEmitter = require('node:events');
// // // // const { emit } = require('node:process');

// // // const myEmitter = new EventEmitter();

// // // myEmitter.on('order-Pizza', (size, name) => {
// // //   console.log(`baking a ${size} pizza for ${name}`);
// // // })

// // // myEmitter.on('order-Pizza', (size) => {
// // //     if (size === 'large') {
// // //         console.log('I will give you a discount of 10%');
// // //     }
// // // })

// // // myEmitter.on('order-Pizza', (size, name) => {
// // //     console.log(`Thank you for your order, ${name}`);
// // // });

// // // myEmitter.emit('order-Pizza', 'large', 'Amrit');

// // const pizzaShop = require('./pizzaShop');
// // const DrinkMachine = require('./drink-machine');


// // const PizzaShop = new pizzaShop();
// // const drinkMachine = new DrinkMachine();

// // PizzaShop.on('order', (size, name) => {
// //     console.log(`baking a ${size} pizza for ${name}`);
// //     drinkMachine.serveDrink(size, name);
// // })

// // PizzaShop.order("small", "Amrit");
// // PizzaShop.displayOrderNumber();

// const CoffeeShop = require('./coffee-shop');
// const DrinkMachine = require('./drink-machine');

// const coffeeShop = new CoffeeShop();
// const drinkMachine = new DrinkMachine();

// coffeeShop.on('order', (size, name) => {
//     console.log(`baking a ${size} pizza for ${name}`);
//     drinkMachine.serveDrink(size);
// })

// coffeeShop.order("small", "Amrit");

// const buffer = new Buffer.from("Hello Amrit Pandt", "utf-8");
// buffer.write("Hello This is Amrit");

// console.log(buffer.toJSON());
// console.log(buffer.toString());


// console.log("first")
// const filedata = fs.readFileSync('file.txt', 'utf-8')

// console.log(filedata);
// console.log("second")

// fs.readFile('file.txt', "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// })

// console.log("third")

// fs.writeFile('greet.txt', " Hello This is Amrit, Amrit wrote in this file", {flag: "a"}, (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(fs.readFileSync('greet.txt', 'utf-8'));
// })

// fs.writeFileSync('greet.txt', `Hello This is Amrit, Amrit wrote in this file`)


// const fs = require('node:fs/promises');
// console.log("first")

// async function readData() {
//     try {
//         const data = await fs.readFile('file.txt', 'utf-8');
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readData();
// console.log("second")

// fs.readFile('file.txt', 'utf-8')
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// setInterval(() => {
//     console.log("second")
// }, 2000)

// const writableStream = fs.createWriteStream('file2.txt');

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
//     writableStream.write(chunk);
// })


// const fs = require('node:fs');
// const zlib = require('node:zlib');


// const gzip = zlib.createGzip();

// const readableStream = fs.createReadStream('file.txt', {
//     encoding: 'utf-8',
// });


// readableStream.pipe(gzip).pipe(fs.createWriteStream('file2.txt.gz'));
// const writableStream = fs.createWriteStream('file2.txt');
// readableStream.pipe(writableStream);


// const fs = require('node:fs');
// const http = require('node:http');

// http.createServer((req, res) => {

//     const superhero = {
//         firstname : "Amrit",
//         lastname: "Pandit",
//     }
    
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // const name = "Amrit";
    // let html = fs.readFileSync('index.html', "utf-8");
    // html = html.replace('{{name}}', name);
    // // fs.createReadStream(__dirname + '/index.html').pipe(res);
    // res.end(html);
    

//     if (req.url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<h1>This is about page</h1>');
//     } else if (req.url === '/contact') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('<h1>This is contact page</h1>');
//     } else if (req.url === '/api') {
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(superhero));
//     }else{
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end('<h1>Page not found</h1>');
//     }


// }).listen(3000, () => {
//     console.log('Server is running on port 3000');
// })

// const fs = require('node:fs');

// fs.readFile('file.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// })

// const crypto = require('node:crypto');

// process.env.UV_THREADPOOL_SIZE = 5;
// const https = require('node:https');
// const MAX_CALLS = 20;

// const start = Date.now();

// for (let i = 0; i < MAX_CALLS; i++) {

//     https.request('https://www.google.com', (res) => {
//         res.on('data', () => {});
//         res.on('end', () => {
//             console.log("Request: ", Date.now() - start);
//         });
//     }).end();
    // crypto.pbkdf2("password", "salt", 100000, 512, "sha512" , () => {
    //     console.log("Hash: ", Date.now() - start);
    // });
// }
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ",Date.now() - start);

// const crypto = require('node:crypto');



// crypto.pbkdf2("amr=it", "salt", 100000, 512, "sha512", (err, derivedKey) => {
//     if (err) throw err;
//     console.log("Hashed password:", derivedKey.toString('hex'));
//     console.log("Hashing took: ", Date.now() - start, "ms");
// });


// console.log("1");
// process.nextTick(() =>  console.log("This is a process.nest 1"));
// console.log("2");

// Promise.resolve().then(() => console.log("This is a promise 1"));
// process.nextTick(() =>  console.log("This is a process.nest 2"));
// Promise.resolve().then(() => console.log("This is a promise 2"));
// process.nextTick(() =>  console.log("This is a process.nest 3"));

// setTimeout(() => console.log("This is a setTimeout 1"), 0);
// setTimeout(() => {console.log("This is a setTimeout 2")
// process.nextTick(() =>  console.log("This is a process.nest inside a setTimeout"))}
// , 0);

// process.nextTick(() =>  console.log("This is a process.nextTick 1"));
// process.nextTick(
//     () =>  {console.log("This is a process.nextTick 2")
//     process.nextTick(() =>  console.log("This is a process.nextTick inside a nexttick"))});

// process.nextTick(() =>  console.log("This is a process.nextTick 3"));

// Promise.resolve().then(() => console.log("This is a promise 1"));
// Promise.resolve().then(() => {
//     console.log("This is a promise 2");
//     Promise.resolve().then(() => console.log("This is a promise inside a promise"));
//     process.nextTick(() =>  console.log("This is a process.nextTick inside a promise"));
// });
// Promise.resolve().then(() => console.log("This is a promise 3"));

// setTimeout(() => console.log("This is a setTimeout with 2s delay"), 2000);

// setTimeout(() => {
//     console.log("This is a setTimeout with 1s delay")
// }, 1000);
// setTimeout(() => {
//     console.log("This is a setTimeout with 0s delay")
// }, 0);
// setTimeout(() => {
//     console.log("This is a setTimeout with 500ms delay")
// }, 500);

// const { set } = require('mongoose');
// const fs = require('node:fs');

// setImmediate(() => console.log("This is a setImmediate 1"));

// setImmediate(() => {
//     console.log("This is a setImmediate 2");
//     setImmediate(() => console.log("This is a setImmediate inside a setImmediate"));
//     process.nextTick(() => console.log("This is a process.nextTick inside a setImmediate"));
//     Promise.resolve().then(() => console.log("This is a promise inside a setImmediate"));
// })

// setImmediate(() => console.log("This is a setImmediate 3"));

// fs.readFile('file.txt', 'utf-8', (error, data) => { 
   
//     setImmediate(() => console.log("This is a setImmediate iside the readFile callback"));
//     process.nextTick(() => console.log("This is a process.nextTick inside the readFile callback"));
//     Promise.resolve().then(() => console.log("This is a promise inside the readFile callback"));
//     setTimeout(() => console.log("This is a setTimeout inside the readFile callback"), 0);
//     console.log("data");
//     });

// process.nextTick(() => console.log("This is a process.nextTick 1"));
// Promise.resolve().then(() => console.log("This is a promise 1"));
// setTimeout(() => console.log("This is a setTimeout 1"), 0);
// setImmediate(() => {console.log("This is a setImmediate 1")
// process.nextTick(() => console.log("This is a process.nextTick inside a setImmediate"))});


// for ( let i = 0;  i < 1000000; i++) {}

// setTimeout(() => console.log("This is a setTimeout 1"), 0);
// setImmediate(() => console.log("This is a setImmediate 1"));

// for (let i = 0; i < 1000000; i++) {}

// const fs = require('node:fs');


// fs.readFile('file2.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// })
// const readableStream = fs.createReadStream('file.txt', {
//     encoding: 'utf-8',
// });
// readableStream.on('data', (chunk) => {
//     console.log(chunk);
// });
// // readableStream.close();

// readableStream.on('close', () => {
//     console.log('Stream closed');
// })

// setImmediate(() => {
//     console.log('This is setImmediate');
// })

// setTimeout(() => {
//     console.log('This is setTimeout');
// })

// Promise.resolve().then(() => {
//     console.log('This is promise');
// })

// process.nextTick(() => {    
//     console.log('This is process.nextTick');
// })


const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write('<h1>Welcome to the home page</h1>');
    res.end();
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
