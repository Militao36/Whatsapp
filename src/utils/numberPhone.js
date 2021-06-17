import { NumberPhoneExeption } from "../exeptions/numberPhone.js"

/**
 * @param {string} number - Número telefone
 */
export const numberPhone = (number) => {
    if (!number)
        throw new NumberPhoneExeption()

    return `${number}@c.us`
}