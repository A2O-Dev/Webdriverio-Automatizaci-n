import { jobs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'

describe('Check the UI integrity page for the DEVOPS ENGINEER area.', () => {
    it('Page of the DEVOPS ENGINEER area', async () => {
        await browser.url(urls.jobsDevopsEngineer)
        await browser.maximizeWindow()

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)

        const firstTitleDevops = await $(jobs.firstTitleDevops)
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

        await expect(firstTitleDevops).toHaveText('DevOps Engineer')
        await expect(firstTitleDevops).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – DevOps Engineer')
        await expect(pageNavHome).toBeExisting()
        await expect(pageNavJobs).toBeExisting()
      
        await expect(requirements).toBeExisting()
        await expect(extras).toBeExisting()
        await expect(responsibilities).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        await applyNow.scrollIntoView({ block: 'center', inline: 'center' });
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveAttribute('href', 'https://forms.gle/c6WhHQj3CDnAy5zw9')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveAttribute('href', 'https://forms.gle/wpb2S2XZpCYqLjz76')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveAttribute('href', 'https://forms.gle/6zgrAfbjGo3UCm9A6')

        await btnGoToTop.click()
        await expect(btnGoToTop).toBeExisting()
    })
})
