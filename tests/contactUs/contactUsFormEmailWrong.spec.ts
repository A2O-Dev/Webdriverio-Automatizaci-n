import { contactUs } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Contact us form email wrong', () => {
  it('check e-mail format n°1', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(env.YOUR_NAME)
    await $(contactUs.email).setValue(env.EMAIL_TEST1)
    await $(contactUs.website).setValue(env.WEDSITE)
    await $(contactUs.message).setValue(env.WRITE_MESSAGE)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })

  it('check e-mail format n°2', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(env.YOUR_NAME)
    await $(contactUs.email).setValue(env.EMAIL_TEST2)
    await $(contactUs.website).setValue(env.WEDSITE)
    await $(contactUs.message).setValue(env.WRITE_MESSAGE)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })

  it('check e-mail format n°3', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(env.YOUR_NAME)
    await $(contactUs.email).setValue(env.EMAIL_TEST3)
    await $(contactUs.website).setValue(env.WEDSITE)
    await $(contactUs.message).setValue(env.WRITE_MESSAGE)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })
})
