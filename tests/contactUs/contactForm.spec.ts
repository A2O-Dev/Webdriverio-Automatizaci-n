import { contactUs } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Contact Form', () => {
  it('should send a success message', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const name = await $(contactUs.name)
    const email = await $(contactUs.email)
    const website = await $(contactUs.website)
    const message = await $(contactUs.message)
    const alertMessage = await $(contactUs.alertMessage)

    await $(name).setValue(env.YOUR_NAME)
    await $(email).setValue(env.EMAIL_ADDRESS)
    await $(website).setValue(env.WEDSITE)
    await $(message).setValue(env.WRITE_MESSAGE)
    await $(contactUs.btnSubmit).click()

    await expect($(name)).toBeExisting()
    await expect($(email)).toBeExisting()
    await expect($(alertMessage)).toBeExisting()
  })
})
