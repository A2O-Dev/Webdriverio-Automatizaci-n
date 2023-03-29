describe('Check the integrity of the UI of the Web App Development page in Services', () => {
    it('Web App Development page', async () => {
        await browser.url('https://staging-new.a2odev.com/web-app-development/')     
        await browser.maximizeWindow()

        // Variables
        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const contactUsLink = await $('=Contact us')
        const iconLenguage = await $('img[title="English"]')
        const firstTitle = await $('h2=Web App Development')
        const paragraph = await $('p=Update your existing web app to the latest technologies, or create one from scratch!')
        const item1 = await $('.elementor-icon-list-items li:nth-child(1)')
        const item2 = await $('.elementor-icon-list-items li:nth-child(2)')
        const img = await $('img[src="https://staging-new.a2odev.com/wp-content/uploads/2023/01/mobile-3.png"]')
        const scrollContact = await $('.contact-footer')
        const titleContactUs = await $('h3=Contact Us')
        const inputName = await $('#name')
        const inputEmail = await $('#email')
        const inputWebsite = await $('[name="website"]')
        const inputMessage = await $('[name="message"]')
        const btnSubmit = await $('button[type="submit"]')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const homePage = await $('.inicio .elementor-widget-container .elementor-icon-wrapper a')
        const buttonGoToTop = await $('a[href="#scroll-up"]')

        // Main navigation menu
        await expect(aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(contactUsLink).toHaveHref('#contact-us')
        await expect(iconLenguage).toBeExisting()

        // Sections of the page Services - Web Apps Development
        await expect(firstTitle).toBeExisting()
        await expect(paragraph).toBeExisting()
        await expect(item1).toHaveText('FrontEnd Technologies we excel at: VueJs, NodeJs, AngularJ, ReactJs')
        await expect(item2).toHaveText('BackEnd Technologies we excel at: PHP, Laravel')
        await expect(img).toBeExisting()

        // Contact Us form
        await scrollContact.scrollIntoView(false)
        await expect(titleContactUs).toBeExisting()
        await expect(inputName).toBeExisting()
        await expect(inputEmail).toBeExisting()
        await expect(inputWebsite).toBeExisting()
        await expect(inputMessage).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        // Social Networking
        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' })
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toHaveHref('https://staging-new.a2odev.com/')

        // Floating button to go to the top of the page.
        await expect(buttonGoToTop).toHaveAttribute('class', 'elementor-icon active')
        await buttonGoToTop.click()
        await expect(buttonGoToTop).not.toHaveAttribute('class', 'active')
            
    })
})