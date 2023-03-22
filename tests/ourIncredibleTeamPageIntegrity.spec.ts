describe('Check the integrity of the UI/UX of the Our Incredible Team', () => {
    it('Page Our Incredible Team', async () => {
        await browser.url('https://staging-new.a2odev.com/team-of-mobile-and-web-development/')
        await browser.pause(3000)
        await browser.maximizeWindow()
        await browser.pause(3000)

        // Variables 
        const aboutUsLink = await $('#premium-nav-menu-item-1897 a')
        const servicesLink = await $('#premium-nav-menu-item-14432 a')
        const projectsLink = await $('#premium-nav-menu-item-1899 a')
        const faqLink = await $('#premium-nav-menu-item-1900 a')
        const contactUsLink = await $('#premium-nav-menu-item-14425 a')
        const iconLenguage = await $('//*[@id="premium-nav-menu-item-8907"]/a/span/img')
        const titleSectionOurTeam = await $('.elementor-element-70c897fd .elementor-widget-container .elementor-heading-title')
        const paragraphOurTeam = await $('.elementor-element-96d2f7b .elementor-widget-container')
        const navHomeLink = await $('.elementor-element-7571f2d9 .elementor-widget-container').$('p').$('a')
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
        const textBelowTeam = await $('.elementor-element-2d25c6f9  .elementor-widget-container .elementor-heading-title')
        const scrollContact = await $('.elementor-element-534f1ac7')
        const titleContactUs = await $('.elementor-element-8f78e74 .elementor-widget-container h3')
        const inputName = await $('#name')
        const inputEmail = await $('#email')
        const inputWebsite = await $('[name="website"]')
        const inputMessage = await $('[name="message"]')
        const btnSubmit = await $('button[type="submit"]')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const homePage = await $('.elementor-element-5c525402 .elementor-widget-container .elementor-icon-wrapper').$('a')

        // Main navigation menu
        await expect(aboutUsLink).toBeExisting()
        await expect(aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toBeExisting()
        await expect(servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(projectsLink).toBeExisting()
        await expect(projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toBeExisting()
        await expect(faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(contactUsLink).toHaveHref('#contact-us')
        await expect(iconLenguage).toHaveAttribute('src', 'https://staging-new.a2odev.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/en_US.png')

        await expect(titleSectionOurTeam).toHaveText('Our Incredible Team')
        await expect(paragraphOurTeam).toHaveText('The A2ODev team for web and mobile development is now growing fast. Simmilarly the number of solutions we provide in the fields of mobile apps and Software as a Service (SaaS) for Business and providers around the world.')
        await expect(navHomeLink).toHaveHref('https://staging-new.a2odev.com/')
        await expect(titleSectionMembers).toHaveText('Team Members')
        await expect(paragraphMembers).toHaveText('In A2odev we are always working together and collaborating. As a result we can provide high quality software solutions around the globe. Check out a little bit about our team for app and web development.')

        // Our web and application development team.
        await textBelowTeam.scrollIntoView(false)
        await expect(nameMember1).toHaveText('Ariel Ayaviri')
        await expect(roleMember1).toHaveText('CEO-CTO')
        await expect(nameMember2).toHaveText('César Tablero')
        await expect(roleMember2).toHaveText('Server Admin – Full Stack Developer')
        await expect(nameMember3).toHaveText('Antonio Arano')
        await expect(roleMember3).toHaveText('Front End Developer')
        await expect(nameMember4).toHaveText('Martin Guadama')
        await expect(roleMember4).toHaveText('Full Stack Developer')

        await $('.elementor-element-f2a7397').moveTo()
        await browser.pause(2000)
        await expect(nameMember1).toHaveText('Ariel Ayaviri')
        await expect(roleMember1).toHaveText('CEO-CTO')
        await $('.elementor-element-1512238').moveTo()
        await expect(nameMember2).toHaveText('César Tablero')
        await expect(roleMember2).toHaveText('Server Admin – Full Stack Developer')
        await browser.pause(2000)
        await $('.elementor-element-4738aa4').moveTo()
        await browser.pause(2000)
        await expect(nameMember3).toHaveText('Antonio Arano')
        await expect(roleMember3).toHaveText('Front End Developer')
        await $('.elementor-element-9e6e5a4').moveTo()
        await browser.pause(2000)
        await expect(nameMember4).toHaveText('Martin Guadama')
        await expect(roleMember4).toHaveText('Full Stack Developer')
        await expect(textBelowTeam).toHaveText('A2ODEV is Awesome !')

        // Contact Us
        await scrollContact.scrollIntoView(false)
        await browser.pause(2000)
        await expect(titleContactUs).toHaveText('Contact Us')
        await expect(inputName).toBeExisting()
        await expect(inputEmail).toBeExisting()
        await expect(inputWebsite).toBeExisting()
        await expect(inputMessage).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        // Social Networking
        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' });
        await browser.pause(2000)
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toHaveHref('https://staging-new.a2odev.com/')

        // Floating button to go to the top of the page.

        const buttonGoToTop = await $('a[href="#scroll-up"]')

        await expect(buttonGoToTop).toBeExisting()
        await buttonGoToTop.click()
        await browser.pause(3000)
    })
})