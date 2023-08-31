import { found } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'

describe('Check Not Found Integrity', () => {
    it('Check Url: Not Found', async () => {
        await browser.url(urls.notFound)
        await browser.maximizeWindow()

        const numberFour1 = await $(found.numberFour1)
        const numberZero = await $(found.numberZero)
        const numberFour2 = await $(found.numberFour2)
        const linkHomePage = await $(found.linkHomePage)

        await expect(numberFour1).toHaveTextContaining('4')
        await expect(numberZero).toHaveTextContaining('0')
        await expect(numberFour2).toHaveTextContaining('4')
        await expect(linkHomePage).toHaveTextContaining('Take me to the Home Page')
        await linkHomePage.click()
        await browser.url(urls.host)
    })
})
