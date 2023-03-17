import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env

describe('Check the links to the "Postúlate ahora" forms.', () => {
  it('IT Technician page', async () => {
    await browser.url(env.WEBA2O_URL + 'jobs/it-technician/')
    await browser.pause(3000)
    await browser.maximizeWindow()

    const linkJobAppFrm = await $('//*[@id="post-8228"]/div/div/section[3]/div/div/div/div[11]/div/ul/li[1]/a/span')
    const linkTheoryTestFrm = await $('//*[@id="post-8228"]/div/div/section[3]/div/div/div/div[11]/div/ul/li[2]/a/span')
    const linkLogicalTestFrm = await $('//*[@id="post-8228"]/div/div/section[3]/div/div/div/div[11]/div/ul/li[3]/span/a')

    // Job application form
    await linkJobAppFrm.scrollIntoView({ block: 'center', inline: 'center' })
    await browser.pause(3000)
    await linkJobAppFrm.click()
    await browser.pause(3000)

    const inputEmail = await $('#identifierId')
    const buttonNextEmail = await $('//*[@id="identifierNext"]/div/button/span')
    const inputPass = await $('//*[@id="password"]/div[1]/div/div[1]/input')
    const buttonNextPass = await $('//*[@id="passwordNext"]/div/button/span')

    // Login Google
    await inputEmail.click()
    await browser.pause(3000)
    await inputEmail.setValue(env.EMAIL_GOOGLE)
    await browser.pause(3000)

    await buttonNextEmail.click()
    await browser.pause(3000)
    await inputPass.setValue(env.PASS_GOOGLE)
    await browser.pause(3000)
    await buttonNextPass.click()
    await browser.pause(3000)

    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLSfUZVn_cgCebZBh0JcT6pAwxKYu8FcTIAGu3nL2HNvX07oufw/viewform')
    await expect(await $('.F9yp7e')).toHaveText('IT & Data Center Assistant- Job Application')

    await browser.url(env.WEBA2O_URL + 'jobs/it-technician/')
    await browser.pause(3000)

    // Theory test form
    await linkJobAppFrm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkTheoryTestFrm.click()
    await browser.pause(3000)
    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLScyFi2lGM25WCTpKqGja2zruZbksTsBaALove--Wae7arvLAQ/viewform')
    await expect(await $('.F9yp7e')).toHaveText('IT Technician Theory Test')

    await browser.url(env.WEBA2O_URL + 'jobs/it-technician/')
    await browser.pause(3000)

    // Logical reasoning test
    await linkJobAppFrm.scrollIntoView({ block: 'center', inline: 'center' })
    await linkLogicalTestFrm.click()
    await browser.pause(3000)
    await expect(browser).toHaveUrlContaining('https://docs.google.com/forms/d/e/1FAIpQLSeIQvkJRtRLrW0RzOkERDKODdm3EuiU54Nn3-_aqhbUgyWbmw/viewform')
    await expect(await $('.F9yp7e')).toHaveText('IT & Data Center Assistant - Logical Reasoning Test')

    await browser.url(env.WEBA2O_URL + 'jobs/it-technician/')
    await browser.pause(3000)
  })
})
