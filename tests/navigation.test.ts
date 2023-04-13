describe('Home Page / Page Navigation - Navigation Test', () => {
    it.only('Already links funtion correctly', async() => {
        await browser.url('https://staging-new.a2odev.com')

        ///Selectors

        const checkOurSolutionButton = await $('=CHECK OUR SOLUTIONS')
        const webAppsLink = await $('h3=Web Apps Development')
        const webSiteLink = await $('.elementor-icon-box-title=Web Site Development')
        const mobileDevLink = await $('.elementor-icon-box-title=Mobile Development')
        const otherSolutionLink = await $('.elementor-icon-box-title=Other Solutions')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const contactUsLink = await $('=Contact us')
        const goToTopButton = await $('a[href="#scroll-up"]')

        ///Main page

        checkOurSolutionButton.click()
        await browser.pause(3000)

        ///Services Links

        webAppsLink.click()
        await browser.pause(3000)
        expect($('h2=Web App Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        checkOurSolutionButton.click()
        webSiteLink.click()
        await browser.pause(3000)
        expect($('h2=Website Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        checkOurSolutionButton.click()
        mobileDevLink.click()
        await browser.pause(3000)
        expect($('h2=Mobile App Dev')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        checkOurSolutionButton.click()
        otherSolutionLink.click()
        await browser.pause(3000)
        expect($('h2=Website Development')).toBeExisting
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        ///Networks

        contactUsLink.click()
        facebookLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        contactUsLink.click()
        twitterLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        contactUsLink.click()
        linkedinLink.click()
        await browser.pause(3000)
        await browser.url('https://staging-new.a2odev.com')
        await browser.pause(3000)

        await $('a[href="https://staging-new.a2odev.com/"]').scrollIntoView()
        await $('a[href="https://staging-new.a2odev.com/"]').click()
        await browser.pause(3000)

        contactUsLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        goToTopButton.click()
        await browser.pause(3000)

        ///About us Page

        aboutUsLink.click()
        await browser.pause(3000)
        await expect($('h2=About us')).toBeExisting
        contactUsLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        goToTopButton.click()
        await browser.pause(3000)

        //Services Section

        servicesLink.click()
        await browser.pause(3000)
        await expect($('h2=Smart Solutions')).toBeExisting
        goToTopButton.click()
        await browser.pause(3000)

        ///Project Page

        projectsLink.click()
        await browser.pause(3000)
        await expect($('h1=Lastest Project')).toBeExisting
        contactUsLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        goToTopButton.click()
        await browser.pause(3000)

        //FAQ Page

        faqLink.click()
        await browser.pause(3000)
        await expect($('h3=Frequently asked questions')).toBeExisting
        contactUsLink.click()
        await browser.pause(3000)
        await expect($('h3=Contact us'))
        goToTopButton.click()
        await browser.pause(3000)
      })
})
