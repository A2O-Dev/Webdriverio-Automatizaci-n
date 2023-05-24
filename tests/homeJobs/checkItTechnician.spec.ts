import { navigationMenu }  from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Check the "IT Technician and Data Center" page', () => {
    it('IT Technician and Data Center page', async () => {
        await browser.url(env.A2O_DEV_URL + 'jobs/it-technician/')
        await browser.maximizeWindow()
        

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)

        const firstTitle = await $('h1=IT Technician & Data Center')
        const pageNav = await $('//section[@id="subjobpanel-up"]//p[1]')
        const pageNavHome = await $('=Home')
        const pageNavJobs = await $('=Jobs')
        const jobResponsibilities = await $('h3=Responsabilidades del cargo')
        const skillRequirements = await $('h3=Habilidades y conocimientos requerimientos')
        const extras = await $('h3=Extras')
        const applyNow = await $('h1=Postúlate ahora!')
        const notes = await $('//p[normalize-space()="Notas:"]')
        

        aboutUsLink.moveTo({})
        servicesLink.moveTo({})
        projectsLink.moveTo({})
        faqLink.moveTo({})
        contactUsLink.moveTo({})
        languageLink.moveTo({})

        await expect(aboutUsLink).toBeExisting()
        await expect(servicesLink).toBeExisting()
        await expect(projectsLink).toBeExisting()
        await expect(faqLink).toBeExisting()
        await expect(contactUsLink).toBeExisting()
        await expect(languageLink).toBeExisting()


        await expect(firstTitle).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – IT Technician')
        await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
        await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

 
        await expect(jobResponsibilities).toBeExisting()
        await notes.scrollIntoView(false)
        await browser.pause(3000)
        await expect(skillRequirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        // Floating button to go to the top of the page.
        const buttonGoToTop = await $('a[href="#subjobpanel-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)

    })
})