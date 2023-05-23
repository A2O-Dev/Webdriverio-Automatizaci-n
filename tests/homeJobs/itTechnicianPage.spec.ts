import { jobs } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env

describe('Check the links to the "Postúlate ahora" forms.', () => {
  it('IT Technician page', async () => {
    await browser.url(env.A2O_DEV_URL + 'jobs/it-technician/')
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
    await inputEmail.setValue(env.EMAIL_GOOGLE)
    await btnNext.click()
    await browser.setTimeout({'implicit':2000})
    await inputPass.setValue(env.PASS_GOOGLE)
    await btnPass.click()
    await browser.url(env.A2O_DEV_URL + 'jobs/it-technician/')

    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkTheoryTestForm.click()
    await expect($(linkTheoryTestForm)).toBeExisting
    await browser.url(env.A2O_DEV_URL + 'jobs/it-technician/')
    
    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkLogicalTestForm.click()
    await expect(linkLogicalTestForm).toBeExisting
    await browser.url(env.A2O_DEV_URL + 'jobs/it-technician/')
    
  })
})
