import { navigationMenu, projects }  from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Projects Integrity', () => {
  it('Projects Integrity laptop', async () => {
    await browser.url(env.A2O_DEV_URL)
    await browser.maximizeWindow()

    const projectLink = await $(navigationMenu.projectsLink) 
    
    const castingApp = await $(projects.castingAppLink) 
    const imageApp = await $(projects.imagesAppLink)
    const realEstateApp = await $(projects.realEstateApp)

    await projectLink.click()
    await expect($(projects.mainProjecttitle)).toBeExisting()
    await expect($(projects.projectSubtitle)).toBeExisting()
    
    
    const paragraphCastingApp = await $(projects.paragraphCastingApp)
    castingApp.moveTo({})
    await expect($(projects.imgCasting)).toBeExisting()
    await expect($(paragraphCastingApp)).toBeExisting()
    console.log(paragraphCastingApp.getText())
  
    const paragraphImagesgApp = await $(projects.paragraphImagesgApp)
    imageApp.moveTo({})
    await expect($(projects.imgApp)).toBeExisting()
    await expect($(paragraphImagesgApp)).toBeExisting()
    console.log(paragraphImagesgApp.getText())
    
    
    const paragraphRealEstateApp = await $(projects.paragraphRealEstateApp)
    realEstateApp.moveTo({})
    await expect($(projects.imgRealEstate)).toBeExisting()
    await expect($(paragraphRealEstateApp)).toBeExisting()
    console.log(paragraphRealEstateApp.getText())
    })
    
})