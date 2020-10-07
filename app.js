// const express = require('express');

// // express has to be invoked, typically named app
// const app = express();

// // create a route, use this app to create a route. THIS ROUTE HAS NO MIDDLEWARE
// // a header is included in the framework
// app.get('/', (require, response) => {
//     response.send('My first express server')
// });

// // final piece is very similar to http
// app.listen(3000, () => {
//     console.log('listening on 3000')
// })

// // you can now check your browser at localhost:3000
// // added scripts start and dev (in the package.json file)





/////////////////////////////////////////////////////////////////////// pt 2

// const express = require('express');


// const path = require('path')

// const app = express();

// // make a .env file
// // add a .envfile in your git ignore and type this:
// require('dotenv').config();


// //name a port variable:      (after the .env type the variable and go down and put it in app.listen (process.env.PORT || 3000;) )
// const port = process.env.PORT || 3000; //process.env tells us to look in the env file


// app.get('/', (require, response) => {
//     response.send('My first express server')
// });


// app.listen(port, () => {

//     //made a slight change and put interpolation
//     console.log(`listening on ${port}`)
// })

// // you can now check your browser at localhost:3000
// // added scripts start and dev (in the package.json file)


/////////////////////////////////////////////////////////////////////// pt 3

// // create a folder called public and put index.html inside


// const express = require('express');

// //require path                      pt3
// const path = require('path')

// const app = express();


// require('dotenv').config();


// const port = process.env.PORT || 3000; 

// // putting middleware, type in the folder as the second parameter
// app.use(express.static(path.join(__dirname, 'public')))

// //comment out app.get
// // app.get('/', (require, response) => {
// //     response.send('My first express server')
// // });


// app.listen(port, () => {

//     console.log(`listening on ${port}`)
// })


////////////////////////////////////////////////// middle ware



const express = require('express');

const path = require('path')

const app = express();

//import from middlwares folder
const logger = require('./middlewares/logger')

const timer = require('./middlewares/timer')


require('dotenv').config();

// require
const moment = require('moment'); 


const port = process.env.PORT || 3000; 

// app.use(express.static(path.join(__dirname, 'public'))) ******comment this out



//to run a middleware everytime use app.use()
// was put in the middlwares folder and exported
// app.use(logger)

app.use(timer)

//info that JD sent
let users = [
    { id: '1', name: 'jd', email: 'jd@me.com', password: '123' },
    { id: '2', name: 'paul', email: 'paul@me.com', password: '123' },
    { id: '3', name: 'lois', email: 'lois@me.com', password: '123' },
    { id: '4', name: 'sidney', email: 'sidney@me.com', password: '123' },
    { id: '5', name: 'canton', email: 'canton@me.com', password: '123' },
  ];



// added response.status(200) before the .send
app.get('/', (require, response) => {
    // clear all code in this and write:
    response.status(200).json({confirmation: 'success', users: users})
});


app.listen(port, () => {

    console.log(`listening on ${port}`)
})