import * as React from 'react'
import { RichText } from '@components/RichText'
import { Page } from '@root/payload-types'
import { ThemeProvider } from '@providers/Theme'
import { SliderButton } from '@faceless-ui/slider'
import classes from './index.module.scss'
import { formatDate } from '@root/utilities/format-date-time'
import { QuoteIcon } from '@root/icons/QuoteIcon'

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>['sliderFields']['quoteSlides'][0]
const { quoteCard, richTextStyle, answerStyle, answerButton } = classes
export const QuoteCard: React.FC<Props> = ({ richText, quoteDate }) => {
  return (
    <ThemeProvider theme="dark" className={classes.quoteCard}>
      <QuoteIcon className={classes.icon} />
      <RichText className={classes.richText} content={richText} />
      <time className={classes.date} dateTime={quoteDate}>
        {formatDate({ date: quoteDate, format: 'shortDateStamp' })}
      </time>
    </ThemeProvider>
  )
}
