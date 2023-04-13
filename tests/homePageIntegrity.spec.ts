describe('Home Page Integrity', () => {
    it('Home Page Integrity laptop', async () => {
        await browser.url('https://staging-new.a2odev.com/')
        await browser.maximizeWindow()
        await browser.pause(3000)

        const logoTipeImg = await $('//*[@id="post-1934"]/div/div/section[1]/div/div/div/section/div/div[1]/div/div/div/a/img')
        const imgMoviesCasting = await $('//*[@id="scroll-up"]/div/div[2]/div/div/div/img')
        const aboutUsLink = await $('=About us')
        const servicesLink = await $('=Services')
        const projectsLink = await $('=Projects')
        const faqLink = await $('=FAQ')
        const contactUsLink = await $('=Contact us')
        const languageLink = await $('//*[@id="premium-nav-menu-item-8907"]/a/span[1]/img')
        const goToTopButton = await $('//*[@id="post-1934"]/div/div/section[7]/div/div/div/div/div/div/a')

        expect(await $('.elementor-section elementor-top-section elementor-element elementor-element-2bc02a70 elementor-section-full_width nav elementor-section-height-default elementor-section-height-default')).toBeExisting()
        expect(await $(logoTipeImg)).toBeExisting()
        expect(await $(imgMoviesCasting)).toBeExisting()
        expect(await $('h1=We turn your ideas into High Quality products !')).toBeExisting()
        expect(await $('//*[@id="scroll-up"]/div/div[1]/div/div[2]/div/p')).toBeExisting()
        
        ///hover over the elements
        aboutUsLink.moveTo({})
        expect(await $('.menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)

        servicesLink.moveTo({})
        expect(await $('.menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home premium-nav-menu-item premium-active-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)
        
        projectsLink.moveTo({})
        expect(await $('.menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)
        
        faqLink.moveTo({})
        expect(await $('.menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)
        
        contactUsLink.moveTo({})
        expect(await $('.menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)
        
        languageLink.moveTo({})
        expect($('.trp-language-switcher-container menu-item menu-item-type-post_type menu-item-object-language_switcher menu-item-has-children current-language-menu-item premium-nav-menu-item premium-item-hovered')).toBeExisting()
        await browser.pause(3000)

        ///changes of the elements after scroll
        await browser.scroll(0,700)

        expect(await $('.elementor-section elementor-top-section elementor-element elementor-element-2bc02a70 elementor-section-full_width nav elementor-section-height-default elementor-section-height-default active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('.premium-nav-menu-item-1897 .menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('.premium-nav-menu-item-14432 .menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home premium-nav-menu-item premium-active-item active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('.premium-nav-menu-item-1899 .menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('.premium-nav-menu-item-1900 .menu-item menu-item-type-post_type menu-item-object-page premium-nav-menu-item active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('.premium-nav-menu-item-14425 .menu-item menu-item-type-custom menu-item-object-custom premium-nav-menu-item active')).toBeExisting()
        await browser.pause(2000)
        expect(await $('elementor-element elementor-element-7a224132 elementor-view-stacked elementor-fixed go-top elementor-shape-circle elementor-widget elementor-widget-icon active')).toBeExisting()
        await browser.pause(2000)
        expect(await $(goToTopButton)).toBeExisting()
        
        ///cards
        expect(await $('//*[@id="Layer_1"]')).toBeExisting()
        expect(await $('h3=Smart Solutions')).toBeExisting()
        expect(await $('//*[@id="post-1934"]/div/div/section[3]/div/div[2]/div/div[1]/div/div/div/svg')).toBeExisting()
        expect(await $('h3=Interactive ')).toBeExisting()
        expect(await $('//*[@id="post-1934"]/div/div/section[3]/div/div[3]/div/div[1]/div/div/div/svg')).toBeExisting()
        expect(await $('h3=Ready to Scale')).toBeExisting()
    })
})