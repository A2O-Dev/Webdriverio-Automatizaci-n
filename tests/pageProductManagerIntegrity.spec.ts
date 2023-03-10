describe('Check the page for Product Manager Recruitment.', () => {
    it('Page Product Manager Recruitment.', async() => {
        await browser.url('https://staging-new.a2odev.com/jobs/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(2000)

        const productManagerLink = await $('.elementor-element-1247d78 .elementor-widget-container .elementor-heading-title').$('a')
        
        await productManagerLink.scrollIntoView({ block: 'center', inline: 'center' });
        await expect(productManagerLink).toHaveText('PRODUCT MANAGER')
        await $(productManagerLink).click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/jobs/product-manager/')
        
        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')
        const firstTitle = await $('h1=Product Manager')
        const pageNav = await $('//*[@class="elementor-widget-container"]/p')
        const pageNavHome = await $('//*[@class="elementor-widget-container"]/p/a[1]')
        const pageNavJobs = await $('//*[@class="elementor-widget-container"]/p/a[2]')
        const responsibilities = await $('h3=Responsabilidades del cargo')
        const requirements = await $('h3=Requerimientos')
        const softSkills = await $('h3=Soft Skills')
        const applyNow = await $('h1=Postúlate ahora!')
        const notes = await $('.elementor-element-29194d1d .elementor-widget-container').$('p')
        const jobAppForm = await $('//*[@id="post-15824"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[1]/a')
        const teoryTestForm = await $('//*[@id="post-15824"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[2]/a')
        const logicalTest = await $('//*[@id="post-15824"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[3]/span/a')
        
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
        await expect(pageNav).toHaveText('Home  –  Jobs – Product Manager')
        await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
        await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

        // Sections of the page
        await expect(responsibilities).toBeExisting()
        await expect(requirements).toBeExisting()
        await expect(softSkills).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        // Position Application Forms
        await applyNow.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(3000)
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveHref('https://forms.gle/47pUb48XeoySh6m4A')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveHref('https://docs.google.com/forms/d/e/1FAIpQLSdnhfqqt7gP1rASP8cpaYsrxQgB8TVRSWgZthbal7H1_7jVDQ/viewform')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveHref('https://docs.google.com/forms/d/e/1FAIpQLSd3QQaruH1BmGZD1iqKha3-rwjUxTq2tFBxXd5Bj8uj_95kCg/viewform')
        
        // Floating button to go to the top of the page.
        const buttonGoToTop = await $('a[href="#subjobpanel-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)
        
    })
})