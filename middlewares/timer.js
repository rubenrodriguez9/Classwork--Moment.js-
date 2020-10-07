
const moment = require('moment'); // require

function timer(req, res, next){
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

    next()
}

module.exports =  timer;