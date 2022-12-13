//custom middleware
module.exports = function (options) {
    //return middleware function
    return function (req, res, next) {
        console.log(options)
        next();
    }
}