require('dotenv-flow').config();

export const appConfig = {
    timeout: parseInt(process.env.TIMEOUT_REQUEST_SECONDS,10) * 1000,
}