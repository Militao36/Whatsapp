export class NumberPhoneExeption extends Error {
    constructor() {
        super()
        this.message = "Incorrectly formatted number"
        this.name = "NumberPhoneExeption"
        this.code = 400
    }
}