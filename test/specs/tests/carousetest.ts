describe('Home Page/Project - Check the carousel of the images', ()=>{
    it('test image carousel functionality', async ()=>{
        await browser.url('https://staging-new.a2odev.com/')
        const projectLink = await $('=Projects')
        //const castingappLink = await $('#text-one')
        const imagesappLink = await $('.premium-modal-trigger-text').$('div*=Images')

        projectLink.click()
        //castingappLink.click()
        //await browser.pause(8000)
        //await $('button[type="button"]').click
        //await browser.pause(8000)

        imagesappLink.click()
        await browser.pause()
        
    })
})
