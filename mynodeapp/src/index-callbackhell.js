const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //user =null
    let error = {
        message: 'User Not found'
    }
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, error)
    }
}

const login = (user, resolve, reject) => {
    console.log('login is called')

    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, 'Login Success')
    } else {
        setTimeout(reject, 1000, 'Login failed')

    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')

    if (status === 'Login Success') {
        setTimeout(resolve, 1000, 'Admin Page')
    } else {
        setTimeout(reject, 1000, 'Guest Page')

    }
}

function main() {
    getUser(user => {
        //call login 
        login(user, status => {
            showDashboard(status, page => {
                console.log(page)
            }, err => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()