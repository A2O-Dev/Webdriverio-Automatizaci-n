describe('About Us Integrity', () => {
    it('About us Integrity laptop', async () => {
      await browser.url('https://staging-new.a2odev.com/')
      await browser.maximizeWindow()
      
      const aboutUsLink = await $('=About us')      
      const contanctUsLink =await $('=Contact us')

      aboutUsLink.click()
      await browser.pause(3000)
      await expect($('h1=About us')).toBeExisting()
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[2]/div/p')).toHaveTextContaining('We are a team of passionate programmers with high expertise in development of mobile and web apps.')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[1]/span[2]')).toHaveTextContaining('Responsability')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[2]/span[2]')).toHaveTextContaining('Fluent Communication')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[3]/span[2]')).toHaveTextContaining('Adaptability')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[4]/span[2]')).toHaveTextContaining('Rockstar Developers')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[5]/span[2]')).toHaveTextContaining('Love Challenges')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[6]/span[2]')).toHaveTextContaining('Constantly Updated')
      await expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[7]/span[2]')).toHaveTextContaining('Use of best practices')
      await expect($('//*[@id="scroll-up"]/div/div[1]/div/div/div/img')).toBeExisting()
      await browser.pause(3000)

      contanctUsLink.click()
      await expect($('[id="contact-us"]')).toBeExisting()
      await browser.pause(3000)
    })
})



