

class CustomerService {
    constructor() { }

    findAll() {
        const data = [{ id: 1, firstName: 'Subramanian', lastName: 'Murugan', city: 'Coimbatore' }]
        return Promise.resolve(data)
    }
}
module.exports = new CustomerService()