describe('Check the "IT Technician and Data Center" page', () => {
    it('IT Technician and Data Center page', async () => {
        await browser.url('https://staging-new.a2odev.com/join-our-team/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(3000)

        const jobSection = await $('.elementor-heading-title=PRODUCT MANAGER');
        const linkItTechnician = await $('.elementor-heading-title=IT TECHNICIAN & DATA CENTER')

        await jobSection.scrollIntoView(false)
        await browser.pause(3000)
        await linkItTechnician.click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/jobs/it-technician/')
        await browser.pause(3000)

        const aboutUsLink = await $('#premium-nav-menu-item-1897 a')
        const servicesLink = await $('#premium-nav-menu-item-14432 a')
        const projectsLink = await $('#premium-nav-menu-item-1899 a')
        const faqLink = await $('#premium-nav-menu-item-1900 a')
        const contactUsLink = await $('#premium-nav-menu-item-14425 a')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')
        const firstTitle = await $('h1=IT Technician & Data Center')
        const pageNav = await $('//*[@class="elementor-widget-container"]/p')
        const pageNavHome = await $('//*[@class="elementor-widget-container"]/p/a[1]')
        const pageNavJobs = await $('//*[@class="elementor-widget-container"]/p/a[2]')
        const jonResponsibilities = await $('h3=Responsabilidades del cargo')
        const skillRequirements = await $('h3=Habilidades y conocimientos requerimientos')
        const extras = await $('h3=Extras')
        const applyNow = await $('h1=Postúlate ahora!')
        const notes = await $('.elementor-element-501e7af5 .elementor-widget-container p')
        const modalityWorkP1 = await $('//*[@id="post-8228"]/div/div/section[3]/div/div/div/div[8]/div/ul/li[1]')
        const modalityWorkP2 = await $('//*[@id="post-8228"]/div/div/section[3]/div/div/div/div[8]/div/ul/li[2]')

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

        // Page Navigator
        await expect(firstTitle).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – IT Technician')
        await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
        await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

        // Sections of the page
        await expect(jonResponsibilities).toBeExisting()
        await notes.scrollIntoView(false)
        await browser.pause(3000)
        await expect(skillRequirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')
        await expect(modalityWorkP1).toHaveTextContaining('Medio tiempo')
        await expect(modalityWorkP2).toHaveTextContaining('Modalidad presencial')

        // Floating button to go to the top of the page.
        const buttonGoToTop = await $('a[href="#subjobpanel-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)

    })
})