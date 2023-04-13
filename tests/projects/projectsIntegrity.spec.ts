describe('Projects Integrity', () => {
    it('Projects Integrity laptop', async () => {
      await browser.url('https://staging-new.a2odev.com/')
      await browser.maximizeWindow()

      const projectLink = await $('=Projects')
      const contactUsForm = await $('=Contact us')
      const castingApp = await $('div[id="text-one"]')
      const imageApp = await $('.premium-modal-trigger-text=Images App')
      const realEstateApp = await $('.premium-modal-trigger-text=Real Estate App')
      
      projectLink.click()
      await expect($('h1=Latest Projects')).toBeExisting()
      await expect($('p=Check out our latest projects.')).toBeExisting()
      await browser.pause(2000)
      
      const paragraphCastingApp = await $('//*[@id="box-one"]/div/div[3]/div/span')
      castingApp.moveTo({})
      await expect($('[data-target="#premium-modal-60d65cc"]')).toBeExisting()
      await expect($(paragraphCastingApp)).toBeExisting()
      console.log(paragraphCastingApp.getText())
      await browser.pause(2000)
      
      const paragraphImagesgApp = await $('//*[@id="box-two"]/div/div[3]/div/span')
      imageApp.moveTo({})
      await expect($('[data-target="#premium-modal-0e595b4"]')).toBeExisting()
      await expect($(paragraphImagesgApp)).toBeExisting()
      console.log(paragraphImagesgApp.getText())
      await browser.pause(2000)

      const paragraphRealEstateApp = await $('//*[@id="box-three"]/div/div[3]/div/span')
      realEstateApp.moveTo({})
      await expect($('[data-target="#premium-modal-06403d4"]')).toBeExisting()
      await expect($(paragraphRealEstateApp)).toBeExisting()
      console.log(paragraphRealEstateApp.getText())
      await browser.pause(2000)

      contactUsForm.click()
      await expect($('h3=Contact Us')).toBeExisting()
      await browser.pause(2000)
    })
    
})