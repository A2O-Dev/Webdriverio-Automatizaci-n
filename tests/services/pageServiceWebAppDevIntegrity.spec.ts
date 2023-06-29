import { urls } from '../../dictionaries/config/urls.ts'
import { contactUs, footer, navigationMenu, services } from '../../dictionaries/selectors/index.ts'

describe('Check the integrity of the UI of the Web App Development page in Services', () => {
    it('Web App Development page', async () => {
        await browser.url(urls.webAppDevelopment)     
        await browser.maximizeWindow()

        // Variables
        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const iconLenguage = await $(navigationMenu.englishFlag)

        const webAppFirstTitle = await $(services.webAppFirstTitle)
        const webAppParagraph = await $(services.webAppParagraph)
        const webAppItem1 = await $(services.webAppImg1)
        const webAppItem2 = await $(services.webAppImg2)
        
       
        const titleContactUs = await $(contactUs.titleContactUs)
        const inputName = await $(contactUs.name)
        const inputEmail = await $(contactUs.email)
        const inputWebsite = await $(contactUs.website)
        const inputMessage = await $(contactUs.message)
        const btnSubmit = await $(contactUs.btnSubmit)
        const scrollContact = await $(contactUs.scrollContact)
         
        const facebookLink = await $(footer.facebookLink)
        const twitterLink = await $(footer.twitterLink)
        const linkedinLink = await $(footer.linkedinLink)
        const homePage = await $(footer.fabLink)
        const btnGoToTop = await $(footer.goToTopButton)

        await expect(aboutUsLink).toHaveTextContaining('About us')
        await expect(servicesLink).toHaveTextContaining('Services')
        await expect(projectsLink).toHaveTextContaining('Projects')
        await expect(faqLink).toHaveTextContaining('FAQ')
        await expect(contactUsLink).toHaveTextContaining('Contact us')
        await expect(iconLenguage).toBeExisting()

        await expect(webAppFirstTitle).toBeExisting()
        await expect(webAppParagraph).toBeExisting()
        await expect(webAppItem1).toHaveText('FrontEnd Technologies we excel at: VueJs, NodeJs, AngularJ, ReactJs')
        await expect(webAppItem2).toHaveText('BackEnd Technologies we excel at: PHP, Laravel')


        await scrollContact.scrollIntoView(false)
        await expect(titleContactUs).toBeExisting()
        await expect(inputName).toBeExisting()
        await expect(inputEmail).toBeExisting()
        await expect(inputWebsite).toBeExisting()
        await expect(inputMessage).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' })
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toBeExisting()

        await expect(btnGoToTop).toHaveAttribute('class', 'elementor-icon active')
        await btnGoToTop.click()
        await expect(btnGoToTop).not.toHaveAttribute('class', 'active')
            
    })
})