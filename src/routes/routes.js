import { Router } from 'express'
import Sessions from '../session.js'
import SessionRepo from '../repositories/sessions.js'

const router = Router()

router.get('/:name', async (req, res) => {
    const session = await SessionRepo.findByName(req.params.name)
    return res.status(200).json({
        qrcode: session.qrcode
    })
})

router.delete('/:name', async (req, res) => {
    const name = req.params.name
    const session = Sessions.session.get(name)
    await session.logout()
    await session.close()
    Sessions.session.delete(name)
    await SessionRepo.delete(name);
    return res.status(200).json({
        qrcode: session.qrcode
    })
})

export { router }