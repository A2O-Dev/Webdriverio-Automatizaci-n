import { footer, navigationMenu } from '../../dictionaries/selectors/index.js'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Home Page Integrity', () => {
    it('Home Page Integrity laptop', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)

        const smartCard = await $(navigationMenu.smartCard)
        const interactiveCard = await $(navigationMenu.interactiveCard)
        const readyCard = await $(navigationMenu.readyCard)

        const goToTopButton = await $(footer.goToTopButton)

        await expect($(navigationMenu.logoTypeImg)).toBeExisting()
        await expect($(navigationMenu.imgMoviesCasting)).toBeExisting()
        await expect($(navigationMenu.CoverTitle)).toBeExisting()
        await expect($(navigationMenu.coverSubtitle)).toBeExisting()

        aboutUsLink.moveTo({})
        servicesLink.moveTo({})
        projectsLink.moveTo({})
        faqLink.moveTo({})
        contactUsLink.moveTo({})
        languageLink.moveTo({})

        await expect($(aboutUsLink)).toBeExisting()
        await expect($(servicesLink)).toBeExisting()
        await expect($(projectsLink)).toBeExisting()
        await expect($(faqLink)).toBeExisting()
        await expect($(contactUsLink)).toBeExisting()
        await expect($(languageLink)).toBeExisting()
        await browser.scroll(0, 700)
      

        smartCard.moveTo({})
        interactiveCard.moveTo({})
        readyCard.moveTo({})
        
        await expect($(smartCard)).toBeExisting()
        await expect($(interactiveCard)).toBeExisting()
        await expect($(readyCard)).toBeExisting()
        
        await goToTopButton.click()
        await expect($(goToTopButton)).toBeExisting()



    })
})