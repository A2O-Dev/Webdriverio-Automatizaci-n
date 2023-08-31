import { jobs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'
describe('Check the UI/UX integrity page for the WEB APP DEVELOPER area.', () => {
    it('Page of the WEB APP DEVELOPER area', async () => {
        await browser.url(urls.jobsWebAppDev)
        await browser.maximizeWindow()

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)
        
        const firstTitleWebAppDev = await $(jobs.webAppDevTitle)
        const pageNav = await $(jobs.pageNav)
        const pageNavHome = await $(jobs.pageNavHome)
        const pageNavJobs = await $(jobs.pageNavJobs)

        const requirements = await $(jobs.requirements)
        const extras = await $(jobs.extras)
        const responsibilities = await $(jobs.responsibilities)
        const applyNow = await $(jobs.applyNow)
        const notes = await $(jobs.notes)

        const jobAppForm = await $(jobs.linkJobAppForm)
        const teoryTestForm = await $(jobs.linkTheoryTestForm)
        const logicalTest = await $(jobs.linkLogicalTestForm)
        const btnGoToTop = await $(jobs.btnGoToTop)

        aboutUsLink.moveTo({})
        servicesLink.moveTo({})
        projectsLink.moveTo({})
        faqLink.moveTo({})
        contactUsLink.moveTo({})
        languageLink.moveTo({})

        await expect(aboutUsLink).toBeExisting()
        await expect(servicesLink).toBeExisting()
        await expect(projectsLink).toBeExisting()
        await expect(faqLink).toBeExisting()
        await expect(contactUsLink).toBeExisting()
        await expect(languageLink).toBeExisting()

        await expect(firstTitleWebAppDev).toHaveText('Web App Developer')
        await expect(firstTitleWebAppDev).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – Web App Developer'),
        await expect(pageNavHome).toBeExisting()
        await expect(pageNavJobs).toBeExisting()
      
        await expect(requirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(responsibilities).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        await applyNow.scrollIntoView({ block: 'center', inline: 'center' })
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveAttribute('href', 'https://docs.google.com/forms/d/1dUayEoSKf4Wh6qu0nn35ruOnbKK3TiTg82Hl2A5G9fU/viewform?edit_requested=true')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveAttribute('href', 'https://docs.google.com/forms/d/1ZRyhjunBcg_FqYojlbGhItIJjM1Ly6YBRP_sJdKvO8w/viewform?edit_requested=true')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveAttribute('href', 'https://docs.google.com/forms/d/1ENkLqh9w83sX2wludXDq4E15-1lIWcWjRAJ8_Hq1FSY/viewform?edit_requested=true')

        await btnGoToTop.click()
        await expect(btnGoToTop).toBeExisting()
    })
})
