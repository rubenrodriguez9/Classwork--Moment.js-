//middleware
// has a third parameter called next
function logger(req, res, next){
    console.log(req.method, req.url, res.statusCode)
    //asfasdf
    next()
}


module.exports = logger;