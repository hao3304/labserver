let websocket = null

module.exports = class extends think.Controller {
    constructor(...arg) {
        super(...arg);
    }
    openAction() {
        this.emit('opend', 'This client opened successfully!')
        websocket = this.websocket
    }
    sendAction() {
        let card = this.get('card')
        websocket.emit('data', card)
        websocket.broadcast.emit('data', card)
        return this.json('ok')
    }
};
