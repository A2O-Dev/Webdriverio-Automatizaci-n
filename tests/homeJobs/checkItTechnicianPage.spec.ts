import { jobs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'

describe('Check the "IT Technician and Data Center" page', () => {
  it('IT Technician and Data Center page', async () => {
    await browser.url(urls.jobsItTechnician)
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
    await expect(pageNavHome).toBeExisting()
    await expect(pageNavJobs).toBeExisting()

    await expect(jobResponsibilities).toHaveTextContaining('Responsabilidades del cargo')
    await notes.scrollIntoView(false)
    await expect(skillRequirements).toHaveTextContaining('Habilidades y conocimientos requerimientos')
    await expect(extras).toHaveTextContaining('Extras')
    await expect(applyNow).toHaveTextContaining('Postúlate ahora!')
    await expect(notes).toHaveTextContaining('Notas')

    await expect(btnGoToTop).toBeExisting()
    await btnGoToTop.click()
  })
})