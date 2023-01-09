describe('Home Page / Page Navigation - Navigation Test', () => {
    it.only('Already links funtion correctly', async() => {
        await browser.url('https://staging-new.a2odev.com')
        const aboutusLink = await $('=About us')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')

        facebookLink.scrollIntoView()
        facebookLink.click()
        await browser.pause(5000)
        await browser.url('https://staging-new.a2odev.com')
        
        twitterLink.scrollIntoView()
        twitterLink.click()
        await browser.pause(5000)
        await browser.url('https://staging-new.a2odev.com')
    
        linkedinLink.scrollIntoView()
        linkedinLink.click()
        await browser.pause(5000)
        await browser.url('https://staging-new.a2odev.com')
    
        await $('a[href="https://staging-new.a2odev.com/"]').scrollIntoView()
        await $('a[href="https://staging-new.a2odev.com/"]').click()
        await browser.pause(5000)
        
        aboutusLink.click()
        await browser.pause(8000)
        await expect($('h2=About us')).toBeExisting
            
        projectsLink.click()
        await browser.pause(8000)
        await expect($('h1=Lastest Project')).toBeExisting
        
        faqLink.click()
        await browser.pause(8000)
        await expect($('h3=Frequently asked questions')).toBeExisting
    
      })
})