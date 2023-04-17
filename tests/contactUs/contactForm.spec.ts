describe('Contact Form', () => {
  it('should have a complete UI', async () => {
    await browser.url('https://staging-new.a2odev.com/')
    
    await expect($('#name')).toBeExisting()
    await expect($('#email')).toBeExisting()
  })
  it('should send a success message', async () => {
    await browser.url('https://staging-new.a2odev.com/')

    await $('#name').setValue('Giselle')
    await $('#email').setValue('test@mail.com')
    await $('[name="website"]').setValue('https://www.texasmotorspeedway.com/')
    await $('[name="message"]').setValue('Service de la empresa')
    await $('button[type="submit"]').click()

    await expect($('.wpcf7-response-output')).toBeExisting()
    await expect($('.wpcf7-response-output')).toHaveTextContaining('Thank you for your message. It has been sent.')
  })
})