describe('Check the integrity of the UI/UX of the Our Incredible Team', () => {
    it('Page Our Incredible Team', async () => {
        await browser.url('https://staging-new.a2odev.com/team-of-mobile-and-web-development/')
        await browser.maximizeWindow()

        // variables
        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const contactUsLink = await $('=Contact us')
        const iconLenguage = await $('img[title="English"]')
        const titleSectionOurTeam = await $('h3=Our Incredible Team')
        const paragraphOurTeam = await $('p=The A2ODev team for web and mobile development is now growing fast. Simmilarly the number of solutions we provide in the fields of mobile apps and Software as a Service (SaaS) for Business and providers around the world.')
        const navText = await $('.home-button')
        const navHomeLink = await $('=Home')
        const titleSectionMembers = await $('h2=Team Members')
        const paragraphMembers = await $('.team-label .elementor-widget-container')
        const nameMember1 = await $$('.team-memb-one')[0].$('.elementor-widget-container p strong')
        const roleMember1 = await $$('.team-memb-one')[0].$$('.elementor-widget-container p')[1]
        const nameMember2 = await $$('.team-memb-one')[1].$('.elementor-widget-container p strong')
        const roleMember2 = await $$('.team-memb-one')[1].$$('.elementor-widget-container p')[1]
        const nameMember3 = await $$('.team-memb-one')[2].$('.elementor-widget-container p strong')
        const roleMember3 = await $$('.team-memb-one')[2].$$('.elementor-widget-container p')[1]
        const nameMember4 = await $$('.team-memb-one')[3].$('.elementor-widget-container p strong')
        const roleMember4 = await $$('.team-memb-one')[3].$$('.elementor-widget-container p')[1]
        const textBelowTeam = await $('h2=A2ODEV is Awesome !')
        const scrollContact = await $('.contact-footer')
        const titleContactUs = await $('h3=Contact Us')
        const inputName = await $('#name')
        const inputEmail = await $('#email')
        const inputWebsite = await $('[name="website"]')
        const inputMessage = await $('[name="message"]')
        const btnSubmit = await $('button[type="submit"]')
        const facebookLink = await $('a[href="https://es-la.facebook.com/a2odev/"]')
        const twitterLink = await $('a[href="https://twitter.com/a2odev"]')
        const linkedinLink = await $('a[href="https://bo.linkedin.com/company/a2odev"]')
        const homePage = await $('.inicio .elementor-widget-container .elementor-icon-wrapper a')
        const buttonGoToTop = await $('a[href="#scroll-up"]')

        // Main navigation menu
        await expect(aboutUsLink).toHaveHref('https://staging-new.a2odev.com/about-us/')
        await expect(servicesLink).toHaveHref('https://staging-new.a2odev.com/#services')
        await expect(projectsLink).toHaveHref('https://staging-new.a2odev.com/projects/')
        await expect(faqLink).toHaveHref('https://staging-new.a2odev.com/faq/')
        await expect(contactUsLink).toHaveHref('#contact-us')
        await expect(iconLenguage).toBeExisting()

        // Page header
        await expect(titleSectionOurTeam).toBeExisting()
        await expect(paragraphOurTeam).toBeExisting()
        await expect(navText).toHaveTextContaining('Home  –  Team')
        await expect(navHomeLink).toHaveHref('https://staging-new.a2odev.com/')
        await expect(titleSectionMembers).toBeExisting()
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

        // Hover over the team
        await $(nameMember1).moveTo()
        await expect(nameMember1).toHaveText('Ariel Ayaviri')
        await expect(roleMember1).toHaveText('CEO-CTO')
        await $(nameMember2).moveTo()
        await expect(nameMember2).toHaveText('César Tablero')
        await expect(roleMember2).toHaveText('Server Admin – Full Stack Developer')
        await $(nameMember3).moveTo()
        await expect(nameMember3).toHaveText('Antonio Arano')
        await expect(roleMember3).toHaveText('Front End Developer')
        await $(nameMember4).moveTo()
        await expect(nameMember4).toHaveText('Martin Guadama')
        await expect(roleMember4).toHaveText('Full Stack Developer')

        await expect(textBelowTeam).toBeExisting()

        // Contact Us
        await scrollContact.scrollIntoView(false)
        await expect(titleContactUs).toBeExisting()
        await expect(inputName).toBeExisting()
        await expect(inputEmail).toBeExisting()
        await expect(inputWebsite).toBeExisting()
        await expect(inputMessage).toBeExisting()
        await expect(btnSubmit).toBeExisting()

        // Social Networking
        await scrollContact.scrollIntoView({ block: 'center', inline: 'center' });
        await expect(facebookLink).toBeExisting()
        await expect(twitterLink).toBeExisting()
        await expect(linkedinLink).toBeExisting()
        await expect(homePage).toHaveHref('https://staging-new.a2odev.com/')

        // Floating button to go to the top of the page.
        await expect(buttonGoToTop).toHaveAttribute('class', 'elementor-icon active')
        await buttonGoToTop.click()
        await expect(buttonGoToTop).not.toHaveAttribute('class', 'active')

    })
})