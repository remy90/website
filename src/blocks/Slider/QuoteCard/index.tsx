import * as React from 'react'
import { RichText } from '@components/RichText'
import { Page } from '@root/payload-types'
import { ThemeProvider } from '@providers/Theme'
import { SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>['sliderFields']['quoteSlides'][0]
const { quoteCard, richTextStyle, answerStyle, answerButton } = classes
export const QuoteCard: React.FC<Props> = ({ richText, answers }) => {
  return (
    <ThemeProvider theme="dark" className={quoteCard}>
      <RichText className={richTextStyle} content={richText} />
      <div className={answerStyle}>
        {answers.map(({ answer, id }) => (
          <SliderButton className={answerButton} key={id}>
            {answer}
          </SliderButton>
        ))}
      </div>
    </ThemeProvider>
  )
}
