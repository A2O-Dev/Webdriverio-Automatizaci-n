describe('Check the integrity of the UI of the Web App Development page in Services', () => {
    it('Web App Development page', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        const servicesLink = await $('#premium-nav-menu-item-14432 a')
        const webAppsLink = await $('div[data-column-clickable="https://staging-new.a2odev.com/web-app-development/"]')
        const aboutUsLink = await $('#premium-nav-menu-item-1897 a')
        const projectsLink = await $('#premium-nav-menu-item-1899 a')
        const faqLink = await $('#premium-nav-menu-item-1900 a')
        const contactUsLink = await $('#premium-nav-menu-item-14425 a')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')

        // Services section
        await servicesLink.click()
        await browser.pause(3000)
        await $('.elementor-element-97c2ddd').click()
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

        // Sections of the page Services-Web Apps Development
        const firstTitle = await $('h2=Web App Development')
        const paragraph = await $('.elementor-element-2a40f737 .elementor-widget-container ')
        const item1 = await $('//ul[@class="elementor-icon-list-items"]/li[1]')
        const item2 = await $('//ul[@class="elementor-icon-list-items"]/li[2]')
        const scrollContact = await $('.elementor-element-4458c0c3')
        const img = await $('.elementor-element-201c6b21 .elementor-widget-container img')
        const titleContactUs = await $('.elementor-element-58e34760 .elementor-widget-container h3')
        const inputWebsite = await $('//form/div[4]/p/span/span/input')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const homePage = await $('.elementor-element-4bb66e56 .elementor-widget-container .elementor-icon-wrapper a')

        await expect(firstTitle).toBeExisting()
        await expect(paragraph).toHaveText('Update your existing web app to the latest technologies, or create one from scratch!')
        await expect(item1).toHaveText('FrontEnd Technologies we excel at: VueJs, NodeJs, AngularJ, ReactJs')
        await expect(item2).toHaveText('BackEnd Technologies we excel at: PHP, Laravel')
        await expect(img).toHaveAttribute('src', 'https://staging-new.a2odev.com/wp-content/uploads/2023/01/mobile-3.png')

        // Contact Us form
        await scrollContact.scrollIntoView(false)
        await browser.pause(3000)
        await expect(titleContactUs).toHaveText('Contact Us')
        await expect($('#name')).toBeExisting()
        await expect($('#email')).toBeExisting()
        await expect(inputWebsite).toHaveAttribute('placeholder', 'Your Website')
        await expect($('.wpcf7-textarea')).toBeExisting()
        await expect($('button[type="submit"]')).toBeExisting()

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