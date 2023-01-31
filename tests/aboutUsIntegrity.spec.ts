describe('About Us Integrity', () => {
    it('About us Integrity laptop', async () => {
      await browser.url('https://staging-new.a2odev.com/')
      await browser.maximizeWindow()
      
      const aboutUsLink = await $('=About us')
      
      aboutUsLink.click()
      await browser.pause(3000)
      expect($('h1=About Us')).toBeExisting()
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[2]/div/p')).toHaveTextContaining('We are a team of passionate programmers with high expertise in development of mobile and web apps.')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[1]/span[2]')).toHaveTextContaining('Responsability')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[2]/span[2]')).toHaveTextContaining('Fluent Communication')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[3]/span[2]')).toHaveTextContaining('Adaptability')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[4]/span[2]')).toHaveTextContaining('Rockstar Developers')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[5]/span[2]')).toHaveTextContaining('Love Challenges')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[6]/span[2]')).toHaveTextContaining('Constantly Updated')
      expect($('//*[@id="scroll-up"]/div/div[2]/div/div[3]/div/ul/li[7]/span[2]')).toHaveTextContaining('Use of best practices')
      expect($('.elementor-element elementor-element-b18c54d elementor-absolute elementor-hidden-mobile elementor-widget elementor-widget-image')).toBeExisting()
      await browser.pause(3000)

      const contactForm = await $('h3=Contact Us')
      contactForm.scrollIntoView()
      expect($(contactForm)).toBeExisting()

    })
})


