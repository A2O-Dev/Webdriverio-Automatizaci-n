describe('Check the page with the requirements for the PEOPLE MANAGEMENT ASSISTANT area.', () => {
    it('Check PEOPLE MANAGEMENT ASSISTANT page', async () => {
        await browser.url('https://staging-new.a2odev.com/jobs/people-management-assistant/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        // Verifying page content
        const firstTitle = await $('h1=People Management Assistant')
        const navMain = await $('//*[@class="elementor-widget-container"]/p')
        const requirements = await $('h3=Requerimientos')
        const extras = await $('h3=Extras')
        const responsibilities = await $('h3=Responsabilidades')
        const applyNow = await $('h1=Postúlate ahora!')
        const notes = await $('.elementor-element-263ceb46 .elementor-widget-container')
        const jobAppForm = await $('//*[@id="post-15750"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[1]/a')
        const teoryTestForm = await $('//*[@id="post-15750"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[2]/a')
        const logicalTest = await $('//*[@id="post-15750"]/div/div/section[3]/div/div/div/div[9]/div/ul/li[3]/span/a')

        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/jobs/people-management-assistant/')
        await expect(firstTitle).toBeExisting()
        await expect(navMain).toHaveText('Home  –  Jobs – People Management Assistant')
        await expect(requirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(responsibilities).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toBeExisting()

        await $('.elementor-element-336e950f').click() // Scroll down

        // Check the existence of links
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(logicalTest).toHaveText('Logical reasoning test')

        await expect(jobAppForm).toHaveAttribute('href', 'https://forms.gle/4K7rMMPZNvjXxcL96')
        await expect(teoryTestForm).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSfUNT_rIfIgIAT1FgpJC42YT-VA5GIpeagALBGYDzaQOu2vRg/viewform')
        await expect(logicalTest).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSeAH2VeqD0xRIJhJY3A6DvosRVKOFBTpe4egc-iyGjme2Z8Ig/viewform')
    })
})