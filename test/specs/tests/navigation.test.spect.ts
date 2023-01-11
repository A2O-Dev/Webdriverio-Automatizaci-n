describe('Home Page / Page Navigation - Navigation Test', () => {
    it.only('Already links funtion correctly', async() => {
        await browser.url('https://staging-new.a2odev.com')
        
        ///Selectors
        
        const checkoursolutionButton = await $('=CHECK OUR SOLUTIONS')
        const webappsLink = await $('h3=Web Apps Development')
        const websiteLink = await $('.elementor-icon-box-title=Web Site Development')
        const mobiledevLink = await $('.elementor-icon-box-title=Mobile Development')
        const othersolution = await $('.elementor-icon-box-title=Other Solutions')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const aboutusLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const contactusLink = await $('=Contact us')
        const gototopButton = await $('a[href="#scroll-up"]')

        ///Main page

        checkoursolutionButton.click()
        await browser.pause(3000)

        ///Services Links
        
        webappsLink.click()
        await browser.pause(3000)
        expect($('h2=Web App Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
        
        checkoursolutionButton.click()
        websiteLink.click()
        await browser.pause(3000)
        expect($('h2=Website Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        checkoursolutionButton.click()
        mobiledevLink.click()
        await browser.pause(3000)
        expect($('h2=Mobile App Dev')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
        
        checkoursolutionButton.click()
        othersolution.click()
        await browser.pause(3000)
        expect($('h2=Website Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
        
        ///Networks

        contactusLink.click()
        facebookLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
        
        contactusLink.click()
        twitterLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
    
        contactusLink.click()
        linkedinLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)
    
        await $('a[href="https://staging-new.a2odev.com/"]').scrollIntoView()
        await $('a[href="https://staging-new.a2odev.com/"]').click()
        await browser.pause(3000)

        contactusLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        gototopButton.click()
        await browser.pause(3000)

        ///About us Page

        aboutusLink.click()
        await browser.pause(3000)
        await expect($('h2=About us')).toBeExisting
        contactusLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        gototopButton.click()
        await browser.pause(3000)

        //Services Section

        servicesLink.click()
        await browser.pause(3000)
        await expect($('h2=Smart Solutions')).toBeExisting
        gototopButton.click()
        await browser.pause(3000)

        ///Project Page
        
        projectsLink.click()
        await browser.pause(3000)
        await expect($('h1=Lastest Project')).toBeExisting
        contactusLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        gototopButton.click()
        await browser.pause(3000)

        //FAQ Page
        
        faqLink.click()
        await browser.pause(3000)
        await expect($('h3=Frequently asked questions')).toBeExisting
        contactusLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        gototopButton.click()
        await browser.pause(3000)

      })
})