import { navigationMenu, services }  from '../../dictionaries/selectors/index.js'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Services Integrity', () => {
  it('Services Integrity laptop', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const servicesLink = await $(navigationMenu.servicesLink)
    const webAppsLink = await $(services.webAppsLink)
    const webSiteLink = await $(services.webSiteLink)
    const MobileDevLink = await $(services.mobileDevLink)
    const otherSolLink = await $(services.otherSolutionLink)

    await servicesLink.click()
    webAppsLink.moveTo({})
    webSiteLink.moveTo({})
    MobileDevLink.moveTo({})
    otherSolLink.moveTo({})

    await expect($(services.webAppsLink)).toBeExisting()
    await expect($(services.webSiteLink)).toBeExisting()
    await expect($(services.mobileDevLink)).toBeExisting()
    await expect($(services.otherSolutionLink)).toBeExisting()

    await browser.pause(3000)
    await expect($(services.tilteServices)).toBeExisting()
    await expect($(services.subTilteServices)).toBeExisting()
    await expect($(services.listPrecise)).toHaveTextContaining('Precise solutions for required problems')
    await expect($(services.listEarly)).toHaveTextContaining('Early deliveries of results and reception of feedback')
    await expect($(services.listDesign)).toHaveTextContaining('Design with scalability in mind for future implementations')

  })
})