describe('Testimonial - Carousel', () => {
    it('Check the testimonial carousel', async() => {
        await browser.url('https://staging-new.a2odev.com/')
        browser.maximizeWindow()
        await expect($('h1=Testimonials')).toBeExisting()
        const testimonialActive = await $('.swiper-slide-active .slick-slide')
        await testimonialActive.click()  
        await browser.pause(2000)

        // Drag and drop sliding

        await testimonialActive.dragAndDrop({ x: 100, y: 0 })
        const CoryDrag = await $('.swiper-slide-next').$('.slick-slide').$('.elementskit-author-name=Cory Clemmons')
        await browser.pause(2000)
        console.log(await $('.swiper-slide-next').$('.slick-slide').getText())
        await expect(CoryDrag).toBeExisting()
        await testimonialActive.dragAndDrop({ x: -100, y: 0 })
        await browser.pause(3000)
        const EricDrag = await $('.swiper-slide-next').$('.slick-slide').$('.elementskit-author-name=Eric Goldman')
        await expect(EricDrag).toBeExisting()

        // Sliding with buttons

        const Eric = await $('.swiper-slide-next').$('.slick-slide').$('.elementskit-author-name=Eric Goldman')
        await $('.slick-next').click()
        await browser.pause(3000)
        const Stephen = await $('.swiper-slide-next').$('.slick-slide').$('.elementskit-author-name=Stephen Beehler')
        await expect(Stephen).toBeExisting()
        await $('.slick-prev').click()
        await browser.pause(3000)
        await expect(Eric).toBeExisting()
    })
})