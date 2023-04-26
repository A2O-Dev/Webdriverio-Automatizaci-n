import { navigationMenu } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
const env = process.env

describe('Language Translation', () => {
    it('Language Translation Test', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const languageLink = await $(navigationMenu.languageLink)
        const subMenuLink = await $(navigationMenu.subMenuLink)
        const spanishFlag = await $(navigationMenu.spanishFlag)

        languageLink.moveTo({})
        await expect($(spanishFlag)).toBeExisting()
        await subMenuLink.click()
        await expect(browser).toHaveUrl(env.A2O_DEV_URL + 'es/')

        languageLink.moveTo({})
        await subMenuLink.click()
        await expect(browser).toHaveUrl(env.A2O_DEV_URL)

    })
})
