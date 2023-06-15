import * as dotenv from 'dotenv'

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("Couldn't find .env file")
}
const env = process.env

const host = env.A2O_DEV_URL ?? 'https://staging-new.a2odev.com'

export const urls = {
  host,
  notFount:         `${host}/404Page/`,
  jobsTtTechnician: `${host}/jobs/it-technician/`,
  jobs:             `${host}/jobs`,
}
