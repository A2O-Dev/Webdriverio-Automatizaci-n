describe('Contact Form', () => {
  it('should have a complete UI', async () => {
    await browser.url('https://staging.a2odev.com/')
    
    await expect($('#name')).toBeExisting()
    await expect($('#email')).toBeExisting()
  })
  it('should send a success message', async () => {
    await browser.url('https://staging.a2odev.com/')

    await $('#name').setValue('user test')
    await $('#email').setValue('test@mail.com')
    await $('[name="website"]').setValue('')
    await $('[name="message"]').setValue('user test')
    await $('button[type="submit"]').click()

    await expect($('.wpcf7-response-output')).toBeExisting()
    await expect($('.wpcf7-response-output')).toHaveTextContaining('Thank you for your message. It has been sent.')
  })
})