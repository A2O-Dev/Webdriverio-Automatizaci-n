describe('Check Not Found Integrity', () => {
    it('Check Url: Not Found', async () => {
        await browser.url('https://staging-new.a2odev.com/404Page/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        
        
       //Check UI/XU Integrity

        const numberFour1 = $('.elementor-element-7f763d32 .elementor-widget-container .elementor-heading-title')
        const numberZero = $('.elementor-element-4e452ed2 .elementor-widget-container .elementor-heading-title')
        const numberFour2 = $('.elementor-element-73c33368 .elementor-widget-container .elementor-heading-title')
        const iconA20dev = $('//*[@id="post-8576"]/div/div/section[1]/div/div/div/section/div/div[1]/div/div/div/a/img')
        const linkHomePage = $('//div[@class="elementor-widget-container"]/h6/a')


        await expect(numberFour1).toHaveTextContaining('4')
        await browser.pause(3000)
        await expect(numberZero).toHaveTextContaining('0')
        await browser.pause(3000)
        await expect(numberFour2).toHaveTextContaining('4')
        await browser.pause(3000)
        await expect(linkHomePage).toHaveTextContaining('Take me to the Home Page')
        await browser.pause(3000)
        await expect(iconA20dev).toBeExisting()
        await browser.pause(3000)
        await expect(linkHomePage).toHaveHref('https://staging-new.a2odev.com/')
        await browser.pause(5000)
        
        await linkHomePage.click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl('https://staging-new.a2odev.com/')
        await browser.pause(3000)
    })
})