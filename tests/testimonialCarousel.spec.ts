describe('Testimonial - Carousel', () => {
    it('Check the testimonial carousel', async () => {
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
        for (let index = 5; index >= 1; index--) {
            console.debug('INDEX : ' + index);
            
            switch (index) {
                
                case 1:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                    expect(testimonialCory).toBeExisting()
                    expect(testimonialEric).toBeExisting()
                    break; 
                case 2:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Eric Goldman')).toBeExisting()
                    break;
                case 3:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Stephen Beehler')).toBeExisting()
                    break;
                case 4:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Arnaud Kuhlein')).toBeExisting()
                    break;
                case 5:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: 100, y: 0 })
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Jim Call')).toBeExisting()
                    break;               
            }
            await browser.pause(2000)
        }

            // Rigth -> Left
        for (let index = 1; index <= 5; index++) {
            console.debug('index : ' + index);
            
            switch (index) {
                
                case 1:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Stephen Beehler')).toBeExisting()
                    break;
                case 2:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Arnaud Kuhlein')).toBeExisting()
                    break;
                case 3:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Jim Call')).toBeExisting()
                    break;
                case 4:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Cory Clemmons')).toBeExisting()
                    break;
                case 5:
                    await $('.swiper-slide-active .slick-slide').dragAndDrop({ x: -100, y: 0 })
                    expect(testimonialCory).toBeExisting()
                    expect(testimonialEric).toBeExisting()
                    break;                
            }
            await browser.pause(2000)
        }

        // Sliding with buttons

            // button Next
        for (let index = 1; index <= 5; index++) {
            console.debug('index : ' + index);         
            switch (index) {           
                case 1:
                    await $('.slick-next').click()
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Stephen Beehler')).toBeExisting()
                    break;
                case 2:
                    await $('.slick-next').click()
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Arnaud Kuhlein')).toBeExisting()
                    break;
                case 3:
                    await $('.slick-next').click()
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Jim Call')).toBeExisting()
                    break;
                case 4:
                    await $('.slick-next').click()
                    expect(await $('.swiper-slide-next .slick-slide').$('.elementskit-author-name=Cory Clemmons')).toBeExisting()
                    break;
                case 5:
                    await $('.slick-next').click()
                    expect(testimonialCory).toBeExisting()
                    expect(testimonialEric).toBeExisting()
                    break;                
            }
            await browser.pause(2000)
        }

            // button Prev      
        for (let index = 5; index >= 1; index--) {
            console.debug('INDEX : ' + index);
            
            switch (index) {
                
                case 1:
                    await $('.slick-prev').click()
                    expect(testimonialCory).toBeExisting()
                    expect(testimonialEric).toBeExisting()
                    break; 
                case 2:
                    await $('.slick-prev').click()
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Eric Goldman')).toBeExisting()
                    break;
                case 3:
                    await $('.slick-prev').click()
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Stephen Beehler')).toBeExisting()
                    break;
                case 4:
                    await $('.slick-prev').click()
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Arnaud Kuhlein')).toBeExisting()
                    break;
                case 5:
                    await $('.slick-prev').click()
                    expect(await $('.swiper-slide-active .slick-slide').$('.elementskit-author-name=Jim Call')).toBeExisting()
                    break;               
            }
            await browser.pause(2000)
        }
        
    })


})