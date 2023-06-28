
import { urls } from '../../dictionaries/config/urls.ts'
import { contactUs, footer, navigationMenu, services } from '../../dictionaries/selectors/index.ts'

describe('Check the integrity of the UI of the Web Site Development page in Services', () => {
    it('Page of Web Site Development', async () => {
        await browser.url(urls.webSiteDevelopment)
        await browser.maximizeWindow()


        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const englishFlag = await $(navigationMenu.englishFlag)

        const webSiteFirstTitle = await $(services.webSiteFirstTitle)
        const WebSiteParagraph = await $(services.WebSiteParagraph)
        const item1 = await $(services.webItem1)
        const item2 = await $(services.webItem2)
        const item3 = await $(services.webItem3)
        const item4 = await $(services.webItem4)
        const item5 = await $(services.webItem5)
        const item6 = await $(services.webItem6)
        const item7 = await $(services.webItem7)
        const image = await $(services.webImage)
        const scrollContact = await $(contactUs.scrollContact)

        const titleContactUs = await $(contactUs.titleContactUs)
        const inputName = await $(contactUs.name)
        const inputEmail = await $(contactUs.email)
        const inputWebsite = await $(contactUs.website)
        const inputMessage = await $(contactUs.message)
        const btnSubmit = await $(contactUs.btnSubmit)

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
        await expect(englishFlag).toBeExisting()


        await expect(webSiteFirstTitle).toBeExisting()
        await expect(image).toBeExisting()
        await expect(WebSiteParagraph).toBeExisting()
        await expect(item1).toHaveTextContaining('WordPress')
        await expect(item2).toHaveTextContaining('Wix')
        await expect(item3).toHaveTextContaining('E-commerce')
        await expect(item4).toHaveTextContaining('Woocommerce')
        await expect(item5).toHaveTextContaining('Integration with Stripe')
        await expect(item6).toHaveTextContaining('Integration with Paypal')
        await expect(item7).toHaveTextContaining('Integration with other microservices and APIs')


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


        await expect(btnScrollUp).toHaveAttribute('class', 'elementor-icon active')
        await btnScrollUp.click()
        await expect(btnScrollUp).not.toHaveAttribute('class', 'active')

    })
})