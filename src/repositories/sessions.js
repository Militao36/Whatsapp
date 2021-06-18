import { database } from "../config/database.js"
import { v4 } from 'uuid'

class SessionRepo {
    async saveOrUpdate(name, qrcode) {
        const session = await this.findByName(name)
        if (session) {
            await database.table('sessions').update({ qrcode }).where('name', '=', name)
        } else {
            await database.table('sessions').insert({ name, qrcode, uuid: v4() })
        }
    }

    async findByName(name) {
        const session = await database.table('sessions')
            .select()
            .where('name', '=', name)
            .first()

        return session
    }

    async delete(name) {
        await database.table('sessions')
            .delete()
            .where('name', '=', name)
    }
}

export default new SessionRepo()