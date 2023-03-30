describe('Check the carousel Slider', () => {
    it('Image carousel functionality', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        const projectLink = await $('=Projects')
        const castingAppLink = await $('.premium-modal-trigger-text=Casting App')
        const imagesAppLink = await $('.premium-modal-trigger-text=Images App')
        const realEstateApp = await $('.premium-modal-trigger-text=Real Estate App')

        await projectLink.click()
        await browser.pause(2000)

        //Carousel in Casting App 

        await castingAppLink.click()
        await browser.pause(2000)
        const closeButtonCasting = await $('#premium-modal-07734af button[type="button"]')
        const sliderCasting = await $('.n2-ss-slide .n-uc-iqmvAW3myKBf')
        for (let index = 1; index <= 6; index++) {
            if (index <= 5) {
                await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
            } else {
                await expect(sliderCasting).toBeExisting()
            }
        }
        await $(sliderCasting).dragAndDrop({ x: 100, y: 0 })
        for (let index = 5; index > 1; index--) {
            if (index <= 5) {
                await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
            } else {
                await expect(sliderCasting).toBeExisting()
            }
        }
        await closeButtonCasting.click()

        ///Carousel in Images App 

        await imagesAppLink.click()
        await browser.pause(2000)
        const closeButtonImages = $('#premium-modal-5ae5ff9 button[type="button"]')
        const sliderImages = $('.n2-ss-slider .n-uc-hFyb5LDBg43e')
        for (let index = 1; index <= 3; index++) {
            if (index <= 3) {
                await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
            } else {
                await expect(sliderImages).toBeExisting()
            }
        }
        await $(await sliderImages).dragAndDrop({ x: 100, y: 0 })
        for (let index = 3; index > 1; index--) {
            if (index <= 3) {
                await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
            } else {
                await expect(sliderImages).toBeExisting()
            }
        }
        await closeButtonImages.click()

        ///Carousel in Real Estate App 

        await realEstateApp.click()
        await browser.pause(2000)
        const closeButtonReal = $('#premium-modal-3da65c0 button[type="button')
        const sliderReal = $('.n2-ss-slider .n-uc-tWkRLjSP0dyt')
        for (let index = 1; index <= 2; index++) {
            if (index <= 2) {
                await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
            } else {
                await expect(sliderReal).toBeExisting()
            }
        }
        await $(await sliderReal).dragAndDrop({ x: 100, y: 0 })
        for (let index = 2; index > 1; index--) {
            if (index <= 2) {
                await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
            } else {
                await expect(sliderReal).toBeExisting()
            }
        }
        await closeButtonReal.click()

    })
})