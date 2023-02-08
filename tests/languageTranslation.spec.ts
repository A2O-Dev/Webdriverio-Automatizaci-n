describe('Language Traslation', () => {
    it('Language Traslation Test', async () => {
        const url = 'https://staging-new.a2odev.com/'
        await browser.url(url)
        await browser.pause(3000)
        await browser.maximizeWindow()

        const languageLink =await $('//*[@id="premium-nav-menu-item-8907"]')
        const subMenuLink=await $('//*[@id="premium-nav-menu-item-8907"]/ul')
        const spanishFlag = await $('img[title="Spanish"]')

        languageLink.moveTo({})
        await expect($(spanishFlag)).toBeExisting()
        subMenuLink.click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl(url + 'es/')
        await browser.pause(3000)

        languageLink.moveTo({})
        subMenuLink.click()
        await browser.pause(3000)
        await expect(browser).toHaveUrl(url)
        await browser.pause(3000)
    })
})