import Sessions from './session.js'
import { numberPhone } from './utils/numberPhone.js'

/**
 * @param {import('socket.io').Socket} socket
 */
export default (socket) => {
    socket.on('create-session', async (name) => {
        await Sessions.createOrReturn(name, socket)
    })

    socket.on('sendMessage', async ({ sessaoName, contato, mensagem }) => {
        const session = Sessions.session.get(sessaoName)
        await session.sendText(numberPhone(contato), mensagem)
    })
}