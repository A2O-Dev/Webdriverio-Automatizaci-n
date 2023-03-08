describe('Check the integrity of the UI/UX of the Our Incredible Team', () => {
    it('Page Our Incredible Team', async () => {
        await browser.url('https://staging-new.a2odev.com/team-of-mobile-and-web-development/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(3000)
        // Variables Our Incredible Team section
        const titleSectionOurTeam = await $('.elementor-element-70c897fd .elementor-widget-container .elementor-heading-title')
        const paragraphOurTeam = await $('.elementor-element-96d2f7b .elementor-widget-container')
        const navHomeLink = await $('.elementor-element-7571f2d9 .elementor-widget-container').$('p').$('a')
        // Variables of the team members section
        const titleSectionMembers = await $('.elementor-element-2499d793 .elementor-widget-container .elementor-heading-title')
        const paragraphMembers = await $('.elementor-element-3aa98e8b .elementor-widget-container')
        const nameMember1 = await $('.elementor-element-ee2314a .elementor-widget-container').$('p').$('strong')
        const roleMember1 = await $('//section/div/div[1]/div/section/div/div/div/div[2]/div/p[2]')
        const nameMember2 = await $('.elementor-element-c112b3b .elementor-widget-container').$('p').$('strong')
        const roleMember2 = await $('//section/div/div[2]/div/section/div/div/div/div[2]/div/p[2]')
        const nameMember3 = await $('.elementor-element-b6b4ada .elementor-widget-container').$('p').$('strong')
        const roleMember3 = await $('//section/div/div[3]/div/section/div/div/div/div[2]/div/p[2]')
        const nameMember4 = await $('.elementor-element-202364c .elementor-widget-container').$('p').$('strong')
        const roleMember4 = await $('//section/div/div[4]/div/section/div/div/div/div[2]/div/p[2]')

        // Variables of 

        await browser.scroll(500,500)
        await browser.pause(3000)

        await expect(titleSectionOurTeam).toHaveText('Our Incredible Team')
        await expect(paragraphOurTeam).toHaveText('The A2ODev team for web and mobile development is now growing fast. Simmilarly the number of solutions we provide in the fields of mobile apps and Software as a Service (SaaS) for Business and providers around the world.')
        await expect(navHomeLink).toHaveHref('https://staging-new.a2odev.com/')
        //console.log(await (navHomeLink).getText())
        //console.log(await (navHomeLink).getAttribute('href'))
        await expect(titleSectionMembers).toHaveText('Team Members')
        await expect(paragraphMembers).toHaveText('In A2odev we are always working together and collaborating. As a result we can provide high quality software solutions around the globe. Check out a little bit about our team for app and web development.')
        
        // Our web and application development team.
       
        await expect (nameMember1).toHaveText('Ariel Ayaviri')
        await expect (roleMember1).toHaveText('CEO-CTO')
        await expect (nameMember2).toHaveText('César Tablero')
        await expect (roleMember2).toHaveText('Server Admin – Full Stack Developer')
        await expect (nameMember3).toHaveText('Antonio Arano')
        await expect (roleMember3).toHaveText('Front End Developer')
        await expect (nameMember4).toHaveText('Martin Guadama')
        await expect (roleMember4).toHaveText('Full Stack Developer')
        //console.log( nameMember1.getText()+'.........')
        //console.log( roleMember1.getText())

        // Checking hover
        await $('.elementor-element-f2a7397').moveTo()
        await browser.pause(2000)
        await $('.elementor-element-1512238').moveTo()
        await browser.pause(2000)
        await $('.elementor-element-4738aa4').moveTo()
        await browser.pause(2000)
        await $('.elementor-element-9e6e5a4').moveTo()
        await browser.pause(2000)
        await expect (await $('.elementor-element-2d25c6f9  .elementor-widget-container .elementor-heading-title')).toHaveText('A2ODEV is Awesome !')
        await browser.pause(2000)
    })
})