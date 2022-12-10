const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
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
    })
}

const login = (user) => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login failed')

        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'Login Success') {
            setTimeout(resolve, 1000, 'Admin Page')
        } else {
            setTimeout(reject, 1000, 'Guest Page')

        }
    })

}

function main() {
    //callback based 
    // getUser(user => {
    //     //call login 
    //     login(user, status => {
    //         showDashboard(status, page => {
    //             console.log(page)
    //         }, err => {
    //             console.log(err)
    //         })
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     console.log(err)
    // })

    // getUser().then(user => {
    //     return login(user)
    // }).then(status => {
    //     return showDashboard(status)
    // }).then(page => {
    //     console.log(page)
    // }).catch(err => {
    //     console.log(err)
    // })

    getUser()
        .then(user => login(user))
        .then(status => showDashboard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))

    const { log } = console
    getUser()
        .then(login)
        .then(showDashboard)
        .then(log)
        .catch(log)
}
main()