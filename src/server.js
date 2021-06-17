import express from 'express'
import Sessions from './bot.js'

const server = express()

server.get('/', async (req, res) => {
    const session = await Sessions.create('1')
    return res.status(200).send(session.session)
})

server.listen(3000);