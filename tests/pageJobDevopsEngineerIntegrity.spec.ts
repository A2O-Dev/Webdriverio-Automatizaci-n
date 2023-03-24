describe('Check the UI integrity page for the DEVOPS ENGINEER area.', () => {
    it('Page of the DEVOPS ENGINEER area', async () => {
        await browser.url('https://staging-new.a2odev.com/dev-ops-engineer/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(2000)

        const aboutUsLink = await $('#premium-nav-menu-item-1897 a')
        const servicesLink = await $('#premium-nav-menu-item-14432 a')
        const projectsLink = await $('#premium-nav-menu-item-1899 a')
        const faqLink = await $('#premium-nav-menu-item-1900 a')
        const contactUsLink = await $('#premium-nav-menu-item-14425 a')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')
        const firstTitle = await $('h1=DevOps Engineer')
        const pageNav = await $('//*[@class="elementor-widget-container"]/p')
        const pageNavHome = await $('//*[@class="elementor-widget-container"]/p/a[1]')
        const pageNavJobs = await $('//*[@class="elementor-widget-container"]/p/a[2]')
        const requirements = await $('h3=Requerimientos')
        const extras = await $('h3=Extras')
        const responsibilities = await $('h3=Responsabilidades')
        const applyNow = await $('h1=Postúlate ahora!')
        const jobAppForm = await $('//*[@id="post-15875"]/div/div/div/section[3]/div/div/div/div[9]/div/ul/li[1]/a')
        const teoryTestForm = await $('//*[@id="post-15875"]/div/div/div/section[3]/div/div/div/div[9]/div/ul/li[2]/a')
        const logicalTest = await $('//*[@id="post-15875"]/div/div/div/section[3]/div/div/div/div[9]/div/ul/li[3]/span/a')
        const notes = await $('.elementor-element-263ceb46 .elementor-widget-container p')
        const buttonGoToTop = await $('a[href="#subjobpanel-up"]')

        // Main navigation menu
        await expect(aboutUsLink).toBeExisting()
        await expect(aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toBeExisting()
        await expect(servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(contactUsLink).toBeExisting()
        await expect(contactUsLink).toHaveHref('#contact-us')
        await expect(projectsLink).toBeExisting()
        await expect(projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toBeExisting()
        await expect(faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(iconLenguage).toHaveAttribute('src', 'https://staging-new.a2odev.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png')

        // Page Navigator
        await expect(firstTitle).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – DevOps Engineer')
        await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
        await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

        // Sections of the page
        await expect(requirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(responsibilities).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        // Position Application Forms
        await applyNow.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(3000)
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveHref('https://forms.gle/c6WhHQj3CDnAy5zw9')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveHref('https://forms.gle/wpb2S2XZpCYqLjz76')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveHref('https://forms.gle/6zgrAfbjGo3UCm9A6')

        // Floating button to go to the top of the page.
        const btnGoTopActive = await $('.elementor-element-5da9c136 .elementor-widget-container .elementor-icon-wrapper .active').isExisting()
        await expect(btnGoTopActive).toBe(true)
        await buttonGoToTop.click()
        await browser.pause(3000)

        const btnGoTopNoActive = await $('.elementor-element-5da9c136 .elementor-widget-container .elementor-icon-wrapper .active').isExisting()

        await expect(btnGoTopNoActive).toBe(false)
        await browser.pause(3000)
    })
})