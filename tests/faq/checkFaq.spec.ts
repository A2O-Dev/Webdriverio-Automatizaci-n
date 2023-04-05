describe('Check the integrity of the UI/UX of FAQ', () => {
    it('Check the FAQ section', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        const faqLink = await $('#premium-nav-menu-item-1900')       

        await faqLink.click()
        await browser.pause(3000)

        const questionOne = await $('#elementor-tab-title-1831') .$('.elementor-accordion-title')
        const questionTwo = await $('#elementor-tab-title-1832') .$('.elementor-accordion-title')
        const questionThree = await $('#elementor-tab-title-1833') .$('.elementor-accordion-title')
        const questionFour = await $('#elementor-tab-title-1834') .$('.elementor-accordion-title')

        const answerOne = await $('#elementor-tab-content-1831')
        const answerTwo = await $('#elementor-tab-content-1832')
        const answerThree = await $('#elementor-tab-content-1833')
        const answerFour = await $('#elementor-tab-content-1834')

        // Check FAQ 1
        await expect(questionOne).toHaveTextContaining('1. Do you have experience with Startups or Projects from scratch?')
        await expect(answerOne).toHaveAttribute('style','display: block;')
        await browser.pause(2000)
        await $('#elementor-tab-title-1831 .elementor-accordion-icon .elementor-accordion-icon-opened').click()

        // Check FAQ 2
        await $('#elementor-tab-title-1832 .elementor-accordion-icon .elementor-accordion-icon-closed').click()
        await expect(questionTwo).toHaveTextContaining('2. How do I make sure my project ideas')
        await expect(answerTwo).toHaveAttribute('style','display: block;')
        await expect(answerOne).toHaveAttribute('style','display: none;')
        await browser.pause(2000)
        await $('#elementor-tab-title-1832 .elementor-accordion-icon .elementor-accordion-icon-opened').click()

        // Check FAQ 3
        await $('#elementor-tab-title-1833 .elementor-accordion-icon .elementor-accordion-icon-closed').click()
        await expect(questionThree).toHaveTextContaining('3. How do I know how')
        await expect(answerThree).toHaveAttribute('style','display: block;')
        await expect(answerTwo).toHaveAttribute('style','display: none;')
        await browser.pause(2000)
        await $('#elementor-tab-title-1833 .elementor-accordion-icon .elementor-accordion-icon-opened').click()

        // Check FAQ 4
        await $('#elementor-tab-title-1834 .elementor-accordion-icon .elementor-accordion-icon-closed').click()
        await expect(questionFour).toHaveTextContaining('4. Do you work on Fixed price projects or hourly?')
        await expect(answerFour).toHaveAttribute('style','display: block;')
        await expect(answerThree).toHaveAttribute('style','display: none;')
        await browser.pause(2000)
        await $('#elementor-tab-title-1834 .elementor-accordion-icon .elementor-accordion-icon-opened').click()
    })
})