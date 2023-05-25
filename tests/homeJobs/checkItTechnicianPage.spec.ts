import { jobs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls, credentials } from '../../dictionaries/config/index.ts'

describe('Check the "IT Technician and Data Center" page', () => {
  it('IT Technician and Data Center page', async () => {
    await browser.url(urls.jobsTtTechnician)
    await browser.maximizeWindow()


    const aboutUsLink = await $(navigationMenu.aboutUsLink)
    const servicesLink = await $(navigationMenu.servicesLink)
    const projectsLink = await $(navigationMenu.projectsLink)
    const faqLink = await $(navigationMenu.faqLink)
    const contactUsLink = await $(navigationMenu.contactUsLink)
    const languageLink = await $(navigationMenu.languageLink)

    const firstTitle = await $(jobs.firstTitle)
    const pageNav = await $(jobs.pageNav)
    const pageNavHome = await $(jobs.pageNavHome)
    const pageNavJobs = await $(jobs.pageNavJobs)
    const jobResponsibilities = await $(jobs.jobResponsibilities)
    const skillRequirements = await $(jobs.skillRequirements)
    const extras = await $(jobs.extras)
    const applyNow = await $(jobs.applyNow)
    const notes = await $(jobs.notes)
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

    await expect(firstTitle).toBeExisting()
    await expect(pageNav).toHaveText('Home  –  Jobs – IT Technician')
    await expect(pageNavHome).toHaveAttribute('href', 'https://staging-new.a2odev.com/')
    await expect(pageNavJobs).toHaveAttribute('href', 'https://staging-new.a2odev.com/jobs/')

    await expect(jobResponsibilities).toBeExisting()
    await notes.scrollIntoView(false)
    await browser.pause(3000)
    await expect(skillRequirements).toBeExisting()
    await expect(extras).toBeExisting()
    await expect(applyNow).toBeExisting()
    await expect(notes).toHaveTextContaining('Notas')

    await expect(btnGoToTop).toBeExisting()
    await btnGoToTop.click()
  })
})