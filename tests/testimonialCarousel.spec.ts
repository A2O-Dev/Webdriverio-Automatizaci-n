describe('Testimonial - Carousel', () => {
    it('Check the testimonial carousel', async() => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        
        const testimonialCardLeft = await $('.swiper-slide-active .slick-slide')
        const testimonialEric = await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Eric Goldman')
        const testimonialCory = await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Cory Clemmons')
        
        await expect($('h1=Testimonials')).toBeExisting()
        testimonialCardLeft.click()  // centrar seccion
        await browser.pause(2000)

        // Drag and Drop sliding

            // Left -> Rigth
        for (let index = 1; index <= 5; index++) {
            if (index<=5) {
                await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                await browser.pause(1000)
            }else{
                expect (testimonialCory).toBeExisting()
                expect (testimonialEric).toBeExisting()
            }
        }

            // Rigth -> Left
        for (let index = 1; index <= 5; index++) {
            if (index<=5) {
                await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                await browser.pause(1000)
            }else{
                expect (testimonialCory).toBeExisting()
                expect (testimonialEric).toBeExisting()
            }  
        }      

        // Sliding with buttons

            // button Next
        for (let index = 1; index <= 5; index++) {
            if (index<=5) {
                await $('.slick-next').click()
                await browser.pause(1000)
            }else{
                expect (testimonialCory).toBeExisting()
                expect (testimonialEric).toBeExisting()
            }  
        }        
            // button Prev
        for (let index = 1; index <= 5; index++) {
            if (index<=5) {
                await $('.slick-prev').click()
                await browser.pause(1000)
            }else{
                expect (testimonialCory).toBeExisting()
                expect (testimonialEric).toBeExisting()
            }  
        }        
    })
})