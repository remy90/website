import * as React from 'react'
import { SliderProvider, SliderNav, SliderTrack, Slide, SliderButton } from '@faceless-ui/slider'
import { Gutter } from '@components/Gutter'
import { Page } from '@root/payload-types'
import { RichText } from '@components/RichText'
import { Cell, Grid } from '@faceless-ui/css-grid'
import { PixelBackground } from '@components/PixelBackground'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { ImageCard } from './ImageCard'
import { QuoteCard } from './QuoteCard'
import { useComputedCSSValues } from '../../providers/ComputedCSSValues'

import classes from './index.module.scss'

const cardTypes = {
  imageSlider: ImageCard,
  quoteSlider: QuoteCard,
}

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>

export const SliderBlock: React.FC<Props> = ({ sliderFields }) => {
  const { sliderType, useLeadingHeader, leadingHeader } = sliderFields

  const slides = sliderType === 'imageSlider' ? sliderFields.imageSlides : sliderFields.quoteSlides

  if (!slides || slides.length === 0) return null

  const CardToRender = cardTypes[sliderType]

  const withPixelBackground = sliderType === 'quoteSlider'

  return (
    <div className={[classes.slider].filter(Boolean).join(' ')}>
      <Gutter>
        {useLeadingHeader && <RichText content={leadingHeader} className={classes.leadingHeader} />}
        <SliderNav
          className={classes.sliderNav}
          prevButtonProps={{
            className: [classes.navButton, classes.prevButton].filter(Boolean).join(' '),
            children: <ArrowIcon rotation={225} />,
          }}
          nextButtonProps={{
            className: classes.navButton,
            children: <ArrowIcon rotation={45} />,
          }}
        />
      </Gutter>
      <SliderTrack className={classes.sliderTrack}>
        {slides.map((slide, index) => (
          <Slide key={index} index={index} className={classes.slide}>
            <CardToRender {...slide} />
          </Slide>
        ))}
      </SliderTrack>
      <div className={classes.progressBarBackground} />

      {withPixelBackground && (
        <Gutter className={classes.pixelContainer}>
          <Grid>
            <Cell start={4} cols={9} className={classes.pixelCell}>
              <PixelBackground />
            </Cell>
          </Grid>
        </Gutter>
      )}
    </div>
  )
}

export const Slider: React.FC<Props> = props => {
  return (
    <SliderProvider slidesToShow={1} scrollSnap>
      {/* <div className={classes.buttons}>
        <SliderButton direction="prev">Previous</SliderButton>
        <SliderButton direction="next">Next</SliderButton>
      </div> */}
      <SliderBlock {...props} />
    </SliderProvider>
  )
}
