describe('Alert message when submitting with empty required fields', () => {

    it('should have a complete UI', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.pause(3000)
        await browser.maximizeWindow()

        await expect($('#name')).toBeExisting()
        await expect($('#email')).toBeExisting()
        await expect($('.wpcf7-textarea')).toBeExisting()
        await expect($('button[type="submit"]')).toBeExisting()
    })

    it('check Alert message  ', async () => {
        const btnSubmit = await $('button[type="submit"]')
        const alertMessage = await $('.wpcf7-response-output=One or more fields have an error. Please check and try again.')

        // Alert Message with the Name empty
        await $('#name').setValue('')
        await $('#email').setValue('test@mail.com')
        await $('[name="website"]').setValue('')
        await $('[name="message"]').setValue('Test with Name empty')
        //await expect (alertMessage).toBeExisting()
        //console.log()
        btnSubmit.click()
        //await expect (alertMessage).toBeExisting()
        await browser.pause(3000)

/*
        // Alert Message with the Email empty
        await $('#name').setValue('TestQA')
        await $('#email').setValue('')
        await $('[name="website"]').setValue('')
        await $('[name="message"]').setValue('Test with Email empty')
        btnSubmit.click()
        await expect (alertMessage).toBeExisting()
        await browser.pause(3000)


        // Alert Message with the Message empty
        await $('#name').setValue('TestQA')
        await $('#email').setValue('test@mail.com')
        //await $('[name="website"]').setValue('')
        await $('[name="message"]').setValue('')
        btnSubmit.click()
        await expect (alertMessage).toBeExisting()
        await browser.pause(3000)
*/
    })

})