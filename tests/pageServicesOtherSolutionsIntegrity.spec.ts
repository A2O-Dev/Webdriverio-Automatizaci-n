describe('Check the integrity of the UI of the Other Solutions page in Services', () => {
    it('Page of Other Solutions', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(2000)

        const otherSolutionsLink = await $('.elementor-element-1a769d2')
        const aboutUsLink = await $('#premium-nav-menu-item-1897 a')
        const servicesLink = await $('#premium-nav-menu-item-14432 a')
        const projectsLink = await $('#premium-nav-menu-item-1899 a')
        const faqLink = await $('#premium-nav-menu-item-1900 a')
        const contactUsLink = await $('#premium-nav-menu-item-14425 a')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')

        // Services section
        await servicesLink.click()
        await browser.pause(3000)

        // Sections of the page Services - Other Solutions

        await otherSolutionsLink.click()
        await browser.pause(3000)

        // Main navigation menu
        await expect(aboutUsLink).toBeExisting()
        await expect(aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toBeExisting()
        await expect(servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(projectsLink).toBeExisting()
        await expect(projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toBeExisting()
        await expect(faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(contactUsLink).toHaveHref('#contact-us')
        await expect(iconLenguage).toHaveAttribute('src', 'https://staging-new.a2odev.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png')

        const firstTitle = await $('h2=Other Solutions')
        const paragraph = await $('.elementor-element-316879d2 .elementor-widget-container')
        const item1 = await $('//ul[@class="elementor-icon-list-items"]/li[1]')
        const item2 = await $('//ul[@class="elementor-icon-list-items"]/li[2]')
        const item3 = await $('//ul[@class="elementor-icon-list-items"]/li[3]')
        const image = await $('.elementor-element-754fbdf5 .elementor-widget-container img')
        const scrollContact = await $('.elementor-element-1dc5bebe')
        const titleContactUs = await $('.elementor-element-6ade596f .elementor-widget-container h3')
        const inputName = await $('#name')
        const inputEmail = await $('#email')
        const inputWebsite = await $('[name="website"]')
        const inputMessage = await $('[name="message"]')
        const btnSubmit = await $('button[type="submit"]')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const homePage = await $('.elementor-element-6e0eed79 .elementor-widget-container .elementor-icon-wrapper a')

        await expect(firstTitle).toBeExisting()
        await expect(image).toBeExisting()
        await expect(paragraph).toHaveTextContaining('Other services we excel in:')
        await expect(item1).toHaveTextContaining('REST API development.')
        await expect(item2).toHaveTextContaining('Server Maintenance.')
        await expect(item3).toHaveTextContaining('Image Processing.')

        // Contact Us
        await scrollContact.scrollIntoView(false)
        await browser.pause(3000)
        await expect(titleContactUs).toHaveTextContaining('Contact Us')
        await expect(inputName).toBeExisting()
        await expect(inputEmail).toBeExisting()
        await expect(inputWebsite).toBeExisting()
        await expect(inputMessage).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        // Social Networking
        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' })
        await browser.pause(3000)
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toHaveHref('https://staging-new.a2odev.com/')

        // Floating button to go to the top of the page.

        const buttonGoToTop = await $('a[href="#scroll-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)

    })
})