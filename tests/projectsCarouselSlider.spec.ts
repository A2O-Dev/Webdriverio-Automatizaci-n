describe('Check the carousel Slider', () => {
  it('Image carousel functionality', async () => {
      await browser.url('https://staging-new.a2odev.com/')
      await browser.pause(3000)
      await browser.maximizeWindow()

      const projectLink = await $('=Projects')
      const castingAppLink = await $('.premium-modal-trigger-text=Casting App')
      const imagesAppLink = await $('.premium-modal-trigger-text=Images App')
      const realEstateApp = await $('.premium-modal-trigger-text=Real Estate App')

      await projectLink.click()
      await browser.pause(3000)

      ///Carouse in Casting App Link

      castingAppLink.click()
      await browser.pause(3000)
      const closeButtonCasting = await $('//*[@id="premium-modal-07734af"]/div/div[1]/div/button')
      for (let index = 1; index <= 6; index++) {
          if (index <= 5) {
              await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
              await browser.pause(2000)
          } else {
              expect(await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
          }
      }
      await browser.pause(3000)
      await $('//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div').dragAndDrop({ x: 100, y: 0 })
      await browser.pause(3000)
      for (let index = 5; index > 1; index--) {
          if (index <= 5) {
              await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
              await browser.pause(2000)
          } else {
              expect(await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
          }
      }

      closeButtonCasting.click()
      
     ///Carouse in Images App Link

     await imagesAppLink.click()
          await browser.pause(3000)
          const closeButtonImages = $('//*[@id="premium-modal-5ae5ff9"]/div/div[1]/div/button')
          for (let index = 1; index <= 3; index++) {
            if (index <=3) {
                await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
                await browser.pause(2000)
            } else { 
                expect(await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
            }
        }
        await browser.pause(3000)
      await $('//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div').dragAndDrop({ x: 100, y: 0 })
      await browser.pause(3000)
      for (let index = 3; index > 1; index--) {
          if (index <= 3) {
              await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
              await browser.pause(2000)
          } else {
              expect(await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
          }
      }

      closeButtonImages.click()
    
      ///Carouse in Real Estate App Link

     await realEstateApp.click()
         await browser.pause(3000)
         const closeButtonReal = $('//*[@id="premium-modal-3da65c0"]/div/div[1]/div/button')
         for (let index = 1; index <= 2; index++) {
          if (index <=2) {
              await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: -100, y: 0 })
              await browser.pause(2000)
          } else { 
              expect(await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
          }
      }
      await browser.pause(3000)
      await $('//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div').dragAndDrop({ x: 100, y: 0 })
      await browser.pause(3000)
      for (let index = 2; index > 1; index--) {
          if (index <= 2) {
              await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`).dragAndDrop({ x: 100, y: 0 })
              await browser.pause(2000)
          } else {
              expect(await $(`//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
          }
      }
      
      closeButtonReal.click()
  })
})