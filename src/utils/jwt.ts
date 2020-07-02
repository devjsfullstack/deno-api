import { validateJwt } from 'https://deno.land/x/djwt/validate.ts'
import { makeJwt, setExpiration, Jose, Payload } from 'https://deno.land/x/djwt/create.ts'

const key: string = `${Deno.env.get('SEED')}`

const payload: Payload = {
    iss: '',
    exp: setExpiration(new Date().getTime() + 60000)
}

const header: Jose = {
    alg: 'HS256',
    typ: 'JWT'
}

export const makeJWT = async (email: string) => {
    payload.iss = email
    return makeJwt({ header, payload, key })
}

export const validateJWT = async (jwt: string) => {
    return await (await validateJwt(jwt, key)).isValid
}