describe('Testimonial - Carousel', () => {
    it('Check the testimonial carousel', async() => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        
        const testimonialCardDrag = await $('.swiper-slide-active .slick-slide')
        const testimonialEric = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Eric Goldman')

        await expect($('h1=Testimonials')).toBeExisting()
        testimonialCardDrag.click()  
        await browser.pause(3000)

        // Drag and drop sliding

        testimonialCardDrag.dragAndDrop({ x: 100, y: 0 })
        const testimonialCory = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Cory Clemmons')
        
        await browser.pause(2000)       
        testimonialCardDrag.dragAndDrop({ x: -100, y: 0 })
        await browser.pause(3000)
        expect(testimonialCory).toBeExisting()
        expect(testimonialEric).toBeExisting()

        // Sliding with buttons

        await $('.slick-next').click()
        const testimonialStephen = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Stephen Beehler')
        
        await browser.pause(3000)
        await $('.slick-prev').click()
        await browser.pause(3000)      
        expect(testimonialStephen).toBeExisting()
        expect(testimonialEric).toBeExisting()
    })
})