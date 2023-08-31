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
    const realStateApp = await $(projects.realStateApp)

    await projectLink.click()
    await expect($(projects.mainProjectTitle)).toBeExisting()
    await expect($(projects.projectSubtitle)).toBeExisting()    
    
    const paragraphCastingApp = await $(projects.paragraphCastingApp)
    castingApp.moveTo({})
    await expect($(projects.imgCasting)).toBeExisting()
    await expect($(paragraphCastingApp)).toBeExisting()
    console.log(paragraphCastingApp.getText())
  
    const paragraphImagesgApp = await $(projects.paragraphImagesApp)
    imageApp.moveTo({})
    await expect($(projects.imgApp)).toBeExisting()
    await expect($(paragraphImagesgApp)).toBeExisting()
    console.log(paragraphImagesgApp.getText())    
    
    const paragraphRealSstateApp = await $(projects.paragraphRealStateApp)
    realStateApp.moveTo({})
    await expect($(projects.imgRealState)).toBeExisting()
    await expect($(paragraphRealSstateApp)).toBeExisting()
    console.log(paragraphRealSstateApp.getText())
    })    
})
