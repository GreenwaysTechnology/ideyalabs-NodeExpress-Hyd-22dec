

const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 1000, 'Login Success')
    } else {
        setTimeout(reject, 1000, 'Login Failed')
    }
}
login('admin', 'admin', status => { console.log(status) },
 error => { console.log(error) })
 login('xx', 'yyy', status => { console.log(status) },
 error => { console.log(error) })