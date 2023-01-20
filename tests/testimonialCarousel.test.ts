describe('Testimonial - Carousel', () => {
    it('Check the testimonial carousel', async() => {
        await browser.url('https://staging-new.a2odev.com/')
        browser.maximizeWindow()
        
        const testimonialActive = await $('.swiper-slide-active .slick-slide')
        const eric = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Eric Goldman')

        await expect($('h1=Testimonials')).toBeExisting()
        await testimonialActive.click()  
        await browser.pause(3000)

        // Drag and drop sliding

        await testimonialActive.dragAndDrop({ x: 100, y: 0 })
        const coryDrag = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Cory Clemmons')
        
        await browser.pause(2000)       
        await testimonialActive.dragAndDrop({ x: -100, y: 0 })
        await browser.pause(3000)
        await expect(coryDrag).toBeExisting()
        await expect(eric).toBeExisting()

        // Sliding with buttons

        await $('.slick-next').click()
        const stephen = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Stephen Beehler')
        
        await browser.pause(3000)
        await $('.slick-prev').click()
        await browser.pause(3000)      
        await expect(stephen).toBeExisting()
        await expect(eric).toBeExisting()
    })
})