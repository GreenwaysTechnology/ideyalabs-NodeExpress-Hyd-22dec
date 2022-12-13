const EventEmitter = require('events')

class SalesService extends EventEmitter {
    constructor() {
        super()
        //listener
        this.on('sold', (evt) => {
            console.log(evt)
        })
    }
    //biz 
    sale(product) {
        //emitter
        this.emit('sold', product)
    }

}
function main() {
    let salesService = new SalesService()
    salesService.sale({ id: 1, name: 'phone', qty: 100, price: 100000 })
}
main()