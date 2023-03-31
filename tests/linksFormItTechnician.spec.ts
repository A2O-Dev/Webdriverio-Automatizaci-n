import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env

describe('Check the links to the "Postúlate ahora" forms.', () => {
  it('IT Technician page', async () => {
    await browser.url(env.WEBA2ODEV_URL + 'jobs/it-technician/')
    await browser.maximizeWindow()

    const linkJobAppForm = await $('a[href="https://forms.gle/A8UjXknbWKTY8sp37"]')
    const linkTheoryTestForm = await $('a[href="https://forms.gle/LFcrhtw6adE1nqeq9"]')
    const linkLogicalTestForm = await $('a[href="https://forms.gle/C4nPVQ3UpCrTEgfY9"]')
    const formTitle = await $('.F9yp7e')

    // Job application form
    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkJobAppForm.click()

    const inputEmail = await $('#identifierId')
    const buttonNext = await $$('span[jsname="V67aGc"]')[1]
    const inputPass = await $('input[type="password"]')

    await inputEmail.click()
    await browser.pause(2000)
    await inputEmail.setValue(env.EMAIL_GOOGLE)
    await browser.pause(3000)
    await buttonNext.click()
    await browser.pause(2000)

    await inputPass.setValue(env.PASS_GOOGLE)
    await buttonNext.click()

    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLSfUZVn_cgCebZBh0JcT6pAwxKYu8FcTIAGu3nL2HNvX07oufw/viewform')
    await expect(formTitle).toHaveText('IT & Data Center Assistant- Job Application')

    await browser.url(env.WEBA2ODEV_URL + 'jobs/it-technician/')
    await browser.pause(3000)

    // Theory test form
    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkTheoryTestForm.click()
    await browser.pause(3000)
    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLScyFi2lGM25WCTpKqGja2zruZbksTsBaALove--Wae7arvLAQ/viewform')
    await expect(formTitle).toHaveText('IT Technician Theory Test')

    await browser.url(env.WEBA2ODEV_URL + 'jobs/it-technician/')
    await browser.pause(3000)

    // Logical reasoning test
    await linkJobAppForm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkLogicalTestForm.click()
    await browser.pause(3000)
    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLSeIQvkJRtRLrW0RzOkERDKODdm3EuiU54Nn3-_aqhbUgyWbmw/viewform')
    await expect(formTitle).toHaveText('IT & Data Center Assistant - Logical Reasoning Test')

    await browser.url(env.WEBA2ODEV_URL + 'jobs/it-technician/')
    await browser.pause(3000)
  })
})
