function blockMe(message) {
    console.log(message)
}

//Promise async by default.
function getUser(){
    return Promise.resolve('User')
}

function main() {
     blockMe('start')
     getUser()
          .then(res=>console.log(res))
     blockMe('end')
}
main()