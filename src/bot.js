import { createSession } from "./session.js";

class Sessions {
    /**@type {Map<string,import('venom-bot').Whatsapp>} */
    #session
    constructor() {
        this.#session = new Map()
    }

    async create(name) {
        const session = this.#session.get(name)
        
        if (session)
            return session

        const sessao = await createSession(name)
        this.#session.set(name, sessao)
        return sessao
    }

    async sendText(name, phone, content) {
        await this.#session.get(name).sendText(phone, content)
    }
}


export default new Sessions()


