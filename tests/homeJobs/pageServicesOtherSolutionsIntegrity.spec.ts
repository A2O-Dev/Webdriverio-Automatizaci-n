import { urls } from '../../dictionaries/config/urls.ts'
import { contactUs, footer, navigationMenu, services } from '../../dictionaries/selectors/index.ts'

describe('Check the integrity of the UI of the Other Solutions page in Services', () => {
    it('Page of Other Solutions', async () => {
        await browser.url(urls.otherSolutions)
        await browser.maximizeWindow()

        // Variables
        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const iconLenguage = await $(navigationMenu.englishFlag)

        const firstTitle = await $(services.SolutionsFirstTitle)
        const paragraph = await $(services.paragraph)
        const item1 = await $(services.item1)
        const item2 = await $(services.item2)
        const item3 = await $(services.item3)
       
        const titleContactUs = await $(contactUs.titleContactUs)
        const name = await $(contactUs.name)
        const email = await $(contactUs.email)
        const website = await $(contactUs.website)
        const message = await $(contactUs.message)
        const btnSubmit = await $(contactUs.btnSubmit)
        const scrollContact = await $(contactUs.scrollContact)

        const facebookLink = await $(footer.facebookLink)
        const twitterLink = await $(footer.twitterLink)
        const linkedinLink = await $(footer.linkedinLink)
        const homePage = await $(footer.fabLink)
        const btnScrollUp = await $(footer.goToTopButton)

       
        await expect(aboutUsLink).toHaveTextContaining('About us')
        await expect(servicesLink).toHaveTextContaining('Services')
        await expect(projectsLink).toHaveTextContaining('Projects')
        await expect(faqLink).toHaveTextContaining('FAQ')
        await expect(contactUsLink).toHaveTextContaining('Contact us')
        await expect(iconLenguage).toBeExisting()
     
        await expect(firstTitle).toBeExisting()
        await expect(paragraph).toBeExisting()
        await expect(item1).toHaveTextContaining('REST API development.')
        await expect(item2).toHaveTextContaining('Server Maintenance.')
        await expect(item3).toHaveTextContaining('Image Processing.')

        await scrollContact.scrollIntoView(false)
        await expect(titleContactUs).toBeExisting()
        await expect(name).toBeExisting()
        await expect(email).toBeExisting()
        await expect(website).toBeExisting()
        await expect(message).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' })
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toBeExisting()
        
        await expect(btnScrollUp).toHaveAttribute('class', 'elementor-icon active')
        await btnScrollUp.click()
        await expect(btnScrollUp).not.toHaveAttribute('class', 'active')

    })
})