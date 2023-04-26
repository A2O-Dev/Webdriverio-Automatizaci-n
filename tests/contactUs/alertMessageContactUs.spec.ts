import { contactUs } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Alert message when submitting with empty required fields', () => {
    it('Alert Message with the Name empty ', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(env.EMPTY_NAME)
        await $(contactUs.email).setValue(env.EMAIL_ADDRESS)
        await $(contactUs.website).setValue(env.WEDSITE)
        await $(contactUs.message).setValue(env.WRITE_MESSAGE)
        await $(contactUs.btnSubmit).click()

        await expect($(alertMessage)).toBeExisting()
        await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })

    it('Alert Message with the Email empty ', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(env.YOUR_NAME)
        await $(contactUs.email).setValue(env.EMPTY_EMAIL)
        await $(contactUs.website).setValue(env.WEDSITE)
        await $(contactUs.message).setValue(env.WRITE_MESSAGE)
        await $(contactUs.btnSubmit).click()

        await expect($(alertMessage)).toBeExisting()
        await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })
   
    it('Alert Message with the Message empty ', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(env.YOUR_NAME)
        await $(contactUs.email).setValue(env.EMAIL_ADDRESS)
        await $(contactUs.website).setValue(env.WEDSITE)
        await $(contactUs.message).setValue(env.EMPTY_MESSAGE)
        await $(contactUs.btnSubmit).click()

        await expect($(alertMessage)).toBeExisting()
        await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })
})