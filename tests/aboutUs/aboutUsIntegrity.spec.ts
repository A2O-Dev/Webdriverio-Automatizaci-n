import { aboutUs, contactUs, navigationMenu }  from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('About Us Integrity', () => {
  it('About us Integrity laptop', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const aboutUsLink = await $(navigationMenu.aboutUsLink)   
    const contanctUsLink = await $(navigationMenu.aboutUsLink) 

    await aboutUsLink.click()
    await expect($(aboutUs.titleAboutUs)).toBeExisting()
    await expect($(aboutUs.paragraphAboutUs)).toHaveTextContaining('We are a team of passionate programmers with high expertise in development of mobile and web apps.')
    await expect($(aboutUs.listResponsability)).toHaveTextContaining('Responsability')
    await expect($(aboutUs.listFluent)).toHaveTextContaining('Fluent Communication')
    await expect($(aboutUs.listAdaptability)).toHaveTextContaining('Adaptability')
    await expect($(aboutUs.listRockstar)).toHaveTextContaining('Rockstar Developers')
    await expect($(aboutUs.listLove)).toHaveTextContaining('Love Challenges')
    await expect($(aboutUs.listConstantly)).toHaveTextContaining('Constantly Updated')
    await expect($(aboutUs.listUse)).toHaveTextContaining('Use of best practices')
    await expect($(aboutUs.mainImg)).toBeExisting()
    
    await contanctUsLink.click()
    await expect($(contactUs.contactUsForm)).toBeExisting()
  })
})
