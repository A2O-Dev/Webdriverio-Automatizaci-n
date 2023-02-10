describe('Services Integrity', () => {
    it('Services Integrity laptop', async () => {
      await browser.url('https://staging-new.a2odev.com/')
      await browser.maximizeWindow()
      
      const servicesLink = await $('=Services')
      const webAppsLink = await $('div[data-column-clickable="https://staging-new.a2odev.com/web-app-development/"]')
      const webSiteLink = await $('div[data-column-clickable="https://staging-new.a2odev.com/website-development/"]')
      const MobileDevLink = await $('div[data-column-clickable="https://staging-new.a2odev.com/mobile-development/"]')
      const otherSolLink = await $('div[data-column-clickable="https://staging-new.a2odev.com/other-solutions/"')
      
      servicesLink.click()
      await browser.pause(3000)
      webAppsLink.moveTo({})
      webSiteLink.moveTo({})
      MobileDevLink.moveTo({})
      otherSolLink.moveTo({})

      await browser.pause(3000)
      await expect($('.elementor-icon-box-title=Web Apps Development')).toBeExisting()
      await expect($('.elementor-icon-box-title=Web Site Development')).toBeExisting()
      await expect($('.elementor-icon-box-title=Mobile Development')).toBeExisting()
      await expect($('.elementor-icon-box-title=Other Solutions')).toBeExisting()

      await browser.pause(3000)
      await expect($('[id="smart-solutions"]')).toBeExisting()
      await expect($('p=Web Development Solutions to launch your Ideas to the Cloud.')).toBeExisting()
      await expect($('//*[@id="services"]/div/div[2]/div/div[3]/div/ul/li[1]')).toHaveTextContaining('Precise solutions for required problems')
      await expect($('//*[@id="services"]/div/div[2]/div/div[3]/div/ul/li[2]')).toHaveTextContaining('Early deliveries of results and reception of feedback')
      await expect($('//*[@id="services"]/div/div[2]/div/div[3]/div/ul/li[3]')).toHaveTextContaining('Design with scalability in mind for future implementations')
      
      await browser.pause(3000)
    })
})