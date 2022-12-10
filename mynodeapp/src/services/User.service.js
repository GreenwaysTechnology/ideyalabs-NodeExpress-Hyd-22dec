//module.exports =  returns thing as it is 
//if you are returning single item, it can be single variable having any value,function,array,object,class ...

class UserService {
    constructor(){

    }
    findAll(){
        return 'users'
    }
}
// module.exports = UserService
module.exports = new UserService()