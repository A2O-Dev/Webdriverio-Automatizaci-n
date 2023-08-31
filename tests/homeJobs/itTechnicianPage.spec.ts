import { jobs } from '../../dictionaries/selectors/index.ts'
import { urls, credentials } from '../../dictionaries/config/index.ts'

describe('Check the links to the "Postúlate ahora" forms.', () => {
  it('IT Technician page', async () => {
    await browser.url(urls.jobsItTechnician)
    await browser.maximizeWindow()

    const linkJobAppForm = await $(jobs.linkJobAppForm)
    const linkTheoryTestForm = await $(jobs.linkTheoryTestForm)
    const linkLogicalTestForm = await $(jobs.linkLogicalTestForm)   

    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkJobAppForm.click()
    await expect($(linkJobAppForm)).toBeExisting

    const inputEmail = await $(jobs.inputEmail)
    const btnNext = await $(jobs.btnNext)
    const inputPass = await $(jobs.inputPass)
    const btnPass = await $(jobs.btnPass)

    await inputEmail.click()
    await inputEmail.setValue(credentials.google.email)
    await btnNext.click()
    await browser.setTimeout({'implicit':2000})
    await inputPass.setValue(credentials.google.password)
    await btnPass.click()
    await browser.url(urls.jobsItTechnician)

    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkTheoryTestForm.click()
    await expect($(linkTheoryTestForm)).toBeExisting
    await browser.url(urls.jobsItTechnician)
    
    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkLogicalTestForm.click()
    await expect(linkLogicalTestForm).toBeExisting
    await browser.url(urls.jobsItTechnician)    
  })
})
