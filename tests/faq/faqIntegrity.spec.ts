import { FAQ, navigationMenu } from '../../dictionaries/selectors/index.ts'
import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
const env = process.env
describe('Check the integrity of the UI/UX of FAQ', () => {
    it('Check the FAQ section', async () => {
        await browser.url(env.A2O_DEV_URL)
        await browser.maximizeWindow()

        const faqLink = await $(navigationMenu.faqLink)
        await faqLink.click()

        const questionOne = await $(FAQ.questionOne).$(FAQ.questionTitle)
        const questionTwo = await $(FAQ.questionTwo).$(FAQ.questionTitle)
        const questionThree = await $(FAQ.questionThree).$(FAQ.questionTitle)
        const questionFour = await $(FAQ.questionFour).$(FAQ.questionTitle)
        const answerOne = await $(FAQ.answerOne)
        const answerTwo = await $(FAQ.answerTwo)
        const answerThree = await $(FAQ.answerThree)
        const answerFour = await $(FAQ.answerFour)

        await expect($(questionOne)).toHaveTextContaining('1. Do you have experience with Startups or Projects from scratch?')
        await expect($(answerOne)).toHaveAttribute('style', 'display: block;')
        await $(FAQ.questionOne).click()

        await $(FAQ.questionTwo).click()
        await expect($(questionTwo)).toHaveTextContaining('2. How do I make sure my project ideas')
        await expect($(answerTwo)).toHaveAttribute('style', 'display: block;')
        await expect($(answerOne)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionTwo).click()

        await $(FAQ.questionThree).click()
        await expect($(questionThree)).toHaveTextContaining('3. How do I know how')
        await expect($(answerThree)).toHaveAttribute('style', 'display: block;')
        await expect($(answerTwo)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionThree).click()

        await $(FAQ.questionFour).click()
        await expect($(questionFour)).toHaveTextContaining('4. Do you work on Fixed price projects or hourly?')
        await expect($(answerFour)).toHaveAttribute('style', 'display: block;')
        await expect($(answerThree)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionFour).click()
    })
})