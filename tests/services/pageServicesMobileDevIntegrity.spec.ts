import { urls } from '../../dictionaries/config/urls.ts'
import { contactUs, footer, navigationMenu, services } from '../../dictionaries/selectors/index.ts'

describe('Check the integrity of the UI of the Web Site Development page in Services', () => {
    it('Page of Web Site Development', async () => {
        await browser.url(urls.mobileDevelopment)
        await browser.maximizeWindow()

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const iconLenguage = await $(navigationMenu.englishFlag)

        const mobileFirstTitle = await $(services.mobileFirstTitle)
        const mobileParagraph = await $(services.mobileParagraph)
        const mobileItem1 = await $(services.mobileItem1)
        const mobileItem2 = await $(services.mobileItem2)
        const mobileItem3 = await $(services.mobileItem3)
        const mobileImage = await $(services.mobileImage)

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
        const btnScrollUp = await $(footer.goToTopButton)

      
        await expect(aboutUsLink).toHaveTextContaining('About us')
        await expect(servicesLink).toHaveTextContaining('Services')
        await expect(projectsLink).toHaveTextContaining('Projects')
        await expect(faqLink).toHaveTextContaining('FAQ')
        await expect(contactUsLink).toHaveTextContaining('Contact us')
        await expect(iconLenguage).toBeExisting()

        await expect(mobileFirstTitle).toBeExisting()
        await expect(mobileImage).toBeExisting()
        await expect(mobileParagraph).toHaveTextContaining('FrontEnd Technologies we excel at: VueJs, NodeJs, AngularJs, ReactJs.')
        await expect(mobileItem1).toHaveTextContaining('UI/UX with Material Design')
        await expect(mobileItem2).toHaveTextContaining('IOS and Android with React Native')
        await expect(mobileItem3).toHaveTextContaining('Publish to stores')

        await scrollContact.scrollIntoView(false)
        await expect(titleContactUs).toHaveTextContaining('Contact Us')
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
