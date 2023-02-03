describe('', () => {
    it('Check that the map ubication is right', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        await $('#premium-nav-menu-item-14425').click()
        await browser.pause(8000)
        //const btnZoom = await $('//*[@id="mapDiv"]/div/div/div[13]/div/div/div/button[1]')
        //const btnZoom = await $('.gm-bundled-control-on-bottom')
        //const btnZoom = await $('.gm-control-active')
        //await btnZoom.click()
        //const btn = await $('aria/Ampliar')
        //console.log(await $(btnZoom).getAttribute('area-label'))

        await browser.action('key')
            .down('ctrl')
            .perform()
        expect(await $('aria/Mapa')).toBeExisting()

        await browser.pause(4000)


    })

})

it.only('should scroll using wheel action commands', async () => {
    await browser.url('https://staging-new.a2odev.com/')
    await browser.pause(3000)
    await browser.maximizeWindow()
    await $('#premium-nav-menu-item-14425').click()
    await browser.pause(8000)
    await browser.action('key')
            .down(key.Ctrl)
            .perform()

    console.log(await browser.execute(() => window.scrollY)) // returns 0
    await browser.pause(3000)
    await browser.action('wheel').scroll({
        deltaX: 10,
        deltaY: 500,
        duration: 200
    }).perform()
    await browser.pause(3000)
    console.log(await browser.execute(() => window.scrollY)) // returns 500
    await browser.pause(3000)
})