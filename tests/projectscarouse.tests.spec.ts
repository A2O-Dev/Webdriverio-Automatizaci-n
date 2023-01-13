describe('Home Page/Project - Check the carousel of the images', ()=>{
    it('test image carousel functionality', async ()=>{
        await browser.url('https://staging-new.a2odev.com/')
        const projectLink = await $('=Projects')
        const castingAppLink = await $('.premium-modal-trigger-text=Casting App')
        const imagesAppLink = await $('.premium-modal-trigger-text=Images App')
        const realEstateApp = await $('.premium-modal-trigger-text=Real Estate App')

        projectLink.click()

        ///Carouse in Casting App Link

        castingAppLink.click()
        await browser.pause(3000)
        const arrowRightCasting = await $('[id="n2-ss-9-arrow-next"]')
        const arrowLeftCasting = await $('[id="n2-ss-9-arrow-previous"]')
        const closeButtonCasting = await $('//*[@id="premium-modal-07734af"]/div/div[1]/div/button')
        
        arrowRightCasting.click()
        await browser.pause(2000)
        arrowRightCasting.click()
        await browser.pause(2000)
        arrowRightCasting.click()
        await browser.pause(2000)
        arrowRightCasting.click()
        await browser.pause(2000)
        arrowRightCasting.click()
        await browser.pause(2000)
        
        arrowLeftCasting.click()
        await browser.pause(2000)
        arrowLeftCasting.click()
        await browser.pause(2000)
        arrowLeftCasting.click()
        await browser.pause(2000)
        arrowLeftCasting.click()
        await browser.pause(2000)
        arrowLeftCasting.click()
        await browser.pause(2000)
        closeButtonCasting.click()

        ///Carouse in Images App Link
        
        imagesAppLink.click()
        await browser.pause(3000)
        const arrowRightImages = $('[id="n2-ss-10-arrow-next"]')
        const arrowLeftImages = $('[id="n2-ss-10-arrow-previous"]')
        const closeButtonImages = $('//*[@id="premium-modal-5ae5ff9"]/div/div[1]/div/button')

        arrowRightImages.click()
        await browser.pause(2000)
        arrowRightImages.click()
        await browser.pause(2000)
        arrowRightImages.click()
        await browser.pause(2000)
        arrowRightImages.click()
        await browser.pause(2000)

        arrowLeftImages.click()
        await browser.pause(2000)
        arrowLeftImages.click()
        await browser.pause(2000)
        arrowLeftImages.click()
        await browser.pause(2000)
        arrowLeftImages.click()
        await browser.pause(2000)
        closeButtonImages.click()
        


        ///Carouse in Real Estate App Link

        realEstateApp.click()
        await browser.pause(3000)
        const arrowRightReal = $('id="n2-ss-11-arrow-next"')
        const arrowLeftReal = $('id="n2-ss-11-arrow-previous"')
        const closeButtonReal = $('//*[@id="premium-modal-3da65c0"]/div/div[1]/div/button')

        arrowRightReal.click()
        await browser.pause(2000)
        arrowRightReal.click()
        await browser.pause(2000)

        arrowLeftReal.click()
        await browser.pause(2000)
        arrowLeftReal.click()
        await browser.pause(2000)
        closeButtonReal.click()
    })
})