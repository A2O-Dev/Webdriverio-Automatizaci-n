describe('Check with different URLs that do not exist', () => {
    it('Check Url: Not Found', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        // Url that does not exist
        const url = await browser.getUrl()

        await browser.url(await browser.getUrl()+"service")
        await browser.pause(3000)
        
        const numberFour1 = $('.elementor-element-7f763d32 .elementor-widget-container .elementor-heading-title')
        const numberZero = $('.elementor-element-4e452ed2 .elementor-widget-container .elementor-heading-title')
        const numberFour2 = $('.elementor-element-73c33368 .elementor-widget-container .elementor-heading-title')
        const linkHomePage = $('//div[@class="elementor-widget-container"]/h6/a')

        await expect(numberFour1).toHaveTextContaining('4')
        await expect(numberZero).toHaveTextContaining('0')
        await expect(numberFour2).toHaveTextContaining('4')
        await expect(linkHomePage).toHaveTextContaining('Take me to the Home Page')
        await expect(linkHomePage).toHaveHref('https://staging-new.a2odev.com/')

        await linkHomePage.click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/')
        await browser.pause(3000)
    })
})