//Promise async by default.
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

function main() {
    login('admin', 'admin')
        .then(res => console.log(res))
        .catch(err => console.log(err))
}
main()