import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io';
import Sockets from './io.js'

import { router } from './routes/routes.js'

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => Sockets(socket));

app.use((req, res, next) => {
    req.io = io
    next()
})

app.use(router)

server.listen(5050);