import { jobs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'

describe('Check the UI integrity page for the DEVOPS ENGINEER area.', () => {
    it('Page of the DEVOPS ENGINEER area', async () => {
        await browser.url(urls.jobsProductManager)
        await browser.maximizeWindow()

        const aboutUsLink = await $(navigationMenu.aboutUsLink)
        const servicesLink = await $(navigationMenu.servicesLink)
        const projectsLink = await $(navigationMenu.projectsLink)
        const faqLink = await $(navigationMenu.faqLink)
        const contactUsLink = await $(navigationMenu.contactUsLink)
        const languageLink = await $(navigationMenu.languageLink)

        const firstTitlePM = await $(jobs.firstTitlePM)
        const pageNav = await $(jobs.pageNav)
        const pageNavHome = await $(jobs.pageNavHome)
        const pageNavJobs = await $(jobs.pageNavJobs)

        const requirements = await $(jobs.requirements)
        const SoftSkills = await $(jobs.softSkills)
        const responsibilities = await $(jobs.responsibilitiesPM)
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

        await expect(firstTitlePM).toHaveText('Product Manager')
        await expect(firstTitlePM).toBeExisting()
        await expect(pageNav).toHaveText('Home  –  Jobs – Product Manager')
        await expect(pageNavHome).toBeExisting()
        await expect(pageNavJobs).toBeExisting()
      
        await expect(requirements).toBeExisting()
        await expect(SoftSkills).toBeExisting()
        await expect(responsibilities).toBeExisting()
        await expect(applyNow).toBeExisting()
        await expect(notes).toHaveTextContaining('Notas')

        await applyNow.scrollIntoView({ block: 'center', inline: 'center' });
        await expect(jobAppForm).toHaveText('Job application form')
        await expect(jobAppForm).toHaveAttribute('href', 'https://forms.gle/47pUb48XeoySh6m4A')
        await expect(teoryTestForm).toHaveText('Theory test form')
        await expect(teoryTestForm).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSdnhfqqt7gP1rASP8cpaYsrxQgB8TVRSWgZthbal7H1_7jVDQ/viewform')
        await expect(logicalTest).toHaveText('Logical reasoning test')
        await expect(logicalTest).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSd3QQaruH1BmGZD1iqKha3-rwjUxTq2tFBxXd5Bj8uj_95kCg/viewform')

        await btnGoToTop.click()
        await expect(btnGoToTop).toBeExisting()
    })
})
