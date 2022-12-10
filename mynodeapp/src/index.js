// const userService = require('./services/User.service')
const { findAll } = require('./services/User.service')
function main() {
    // let userService = new UserService()
    console.log(userService.findAll())
}
main()