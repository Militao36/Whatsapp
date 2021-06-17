import { create } from 'venom-bot';

async function createSession(name = "") {
    const session = await create({
        session: name,
    }, (base64Qrimg, asciiQR, attempts, urlCode) => {
        // já salvar esse bagui aqui pra deixar conectado resto da vida
        // caso perder isso terá que salvar de novo
        console.log(urlCode)
    })

    return session
}

export { createSession }