describe('Check the UI/UX integrity page for the WEB APP DEVELOPER area.', () => {
    it('Page of the WEB APP DEVELOPER area', async() => {
        await browser.url('https://staging-new.a2odev.com/jobs/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(2000)

        const scrollDown = await $('.elementor-element-6b90e2d')
        const webAppDevLink = await $('.elementor-element-e1b4a74 .elementor-widget-container .elementor-heading-title').$('a')
        
        await scrollDown.scrollIntoView(false);  // Scroll down to the job title section
        await browser.pause(2000)
        await expect(webAppDevLink).toHaveText('WEB APP DEVELOPER')
        await $(webAppDevLink).click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/jobs/web-app-developer/')

        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')
        const firstTitle = await $('h1=Web App Developer')
        const pageNav = await $('//*[@class="elementor-widget-container"]/p')
        const pageNavHome = await $('//*[@class="elementor-widget-container"]/p/a[1]')
        const pageNavJobs = await $('//*[@class="elementor-widget-container"]/p/a[2]')
        const responsibilities = await $('h3=Responsabilidades')
        const requirements = await $('h3=Requerimientos')
        const extras = await $('h3=Extras')
        const applyNow = await $('h1=Postúlate ahora!')
        const notes = await $('.elementor-element-7b38b929 .elementor-widget-container').$('p')
        const jobAppForm = await $('//*[@id="post-15846"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[1]/a')
        const teoryTestForm = await $('//*[@id="post-15846"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[2]/a')
        const logicalTest = await $('//*[@id="post-15846"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[3]/span/a')

        // Main navigation menu
        await expect(aboutUsLink).toBeExisting()
        await expect (aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toBeExisting()
        await expect (servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(projectsLink).toBeExisting()
        await expect (projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toBeExisting()
        await expect (faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(iconLenguage).toHaveAttribute('src', 'https://staging-new.a2odev.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png')
        
        // Page Navigator
        await expect(firstTitle).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – Web App Developer')
        await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
        await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

        // Sections of the page
        await expect(responsibilities).toBeExisting()
        await expect(requirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        // Position Application Forms
        await applyNow.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(3000)
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveHref('https://docs.google.com/forms/d/1dUayEoSKf4Wh6qu0nn35ruOnbKK3TiTg82Hl2A5G9fU/viewform?edit_requested=true')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveHref('https://docs.google.com/forms/d/1ZRyhjunBcg_FqYojlbGhItIJjM1Ly6YBRP_sJdKvO8w/viewform?edit_requested=true')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveHref('https://docs.google.com/forms/d/1ENkLqh9w83sX2wludXDq4E15-1lIWcWjRAJ8_Hq1FSY/viewform?edit_requested=true')

        // Floating button to go to the top of the page.
        const buttonGoToTop = await $('a[href="#subjobpanel-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)
    })
})