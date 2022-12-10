function blockMe(message) {
    console.log(message)
}

//Promise async by default.
function getUser(){
    return Promise.reject('something went wrong')
}

function main() {
     blockMe('start')
     getUser()
          .catch(err=>console.log(err))
     blockMe('end')
}
main()