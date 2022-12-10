//non blocking implementation using timers

function blockMe(message) {
    console.log(message)
}

//hof 
function sayGreet(cb) {
    // greet()
    //non blocking api 
    setTimeout(cb, 5000,'hello')
}
blockMe('start')
sayGreet((res)=> {
    console.log(res)
})
blockMe('end')