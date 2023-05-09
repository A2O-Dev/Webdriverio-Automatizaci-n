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

        const logoTypeImg = await $(navigationMenu.logoTypeImg)
        const imgMoviesCasting = await $(navigationMenu.imgMoviesCasting)
        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)
        const goToTopButton = await $(footer.goToTopButton)

        await expect($(logoTypeImg)).toBeExisting()
        await expect($(imgMoviesCasting)).toBeExisting()
        await expect($('h1=We turn your ideas into High Quality products !')).toBeExisting()
        await expect($('//*[@id="scroll-up"]/div/div[1]/div/div[2]/div/p')).toBeExisting()

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
        await expect($(goToTopButton)).toBeExisting()
    })
})