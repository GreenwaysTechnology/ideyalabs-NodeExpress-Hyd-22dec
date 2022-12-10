//Promise constructors

function getUser() {
    return new Promise((resolve, reject) => {
        //any async based api 
        setTimeout(resolve, 5000, 'User')
    })
}
function main() {
    getUser().then(res => console.log(res)).catch(err => console.log(err))
}
main()