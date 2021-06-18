import { create } from "venom-bot";
import SessionRepo from './repositories/sessions.js'

class Sessions {

    constructor() {
        /**@type {Map<string,import('venom-bot').Whatsapp>} */
        this.session = new Map()
    }

    async createOrReturn(name, socket) {
        const sessionDatabase = await SessionRepo.findByName(name)
        if (sessionDatabase)
            socket.emit('qrcode', sessionDatabase.qrcode)

        if (this.session.has(name)) {
            return this.session.get(name)
        }

        const sessionCreated = await create({
            session: name,
            logQR: false,
            updatesLog: false,
        }, async (base64Qrimg) => {
            if (base64Qrimg) {
                await SessionRepo.saveOrUpdate(name, base64Qrimg)
                socket.emit('qrcode', base64Qrimg)
            }
        })

        this.session.set(name, sessionCreated)
        return sessionCreated
    }
}


export default new Sessions()


