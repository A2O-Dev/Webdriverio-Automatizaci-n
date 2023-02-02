describe('Contact Form', () => {
    ///first example
    it('check de format email', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.maximizeWindow()
          
        await $('#name').setValue('Lino')
        await $('#email').setValue('test.com@gmail')
        await $('[name="website"]').setValue('https://www.texasmotorspeedway.com/')
        await $('[name="message"]').setValue('Service de la empresa')
        await $('button[type="submit"]').click()
          
        await expect($('.wpcf7-response-output')).toBeExisting()
        await expect($('.wpcf7-response-output')).toHaveTextContaining('One or more fields have an error. Please check and try again.')
      })
    ///second example
    it('check de format email', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.maximizeWindow()
          
        await $('#name').setValue('Lino')
        await $('#email').setValue('test.gmail@com')
        await $('[name="website"]').setValue('https://www.texasmotorspeedway.com/')
        await $('[name="message"]').setValue('Service de la empresa')
        await $('button[type="submit"]').click()
          
        await expect($('.wpcf7-response-output')).toBeExisting()
        await expect($('.wpcf7-response-output')).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })
    ///third example
    it('check de format email', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.maximizeWindow()
          
        await $('#name').setValue('Lino')
        await $('#email').setValue('gmail.com@test')
        await $('[name="website"]').setValue('https://www.texasmotorspeedway.com/')
        await $('[name="message"]').setValue('Service de la empresa')
        await $('button[type="submit"]').click()
          
        await expect($('.wpcf7-response-output')).toBeExisting()
        await expect($('.wpcf7-response-output')).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })  
  })