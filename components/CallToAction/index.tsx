import { Cell, Grid } from '@faceless-ui/css-grid'
import React from 'react'
import { RichText } from '@components/RichText'
import { Page } from '@root/payload-types'
import { PixelBackground } from '@components/PixelBackground'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToAction: React.FC<Props> = ({ ctaFields }) => {
  const { richText, feature, links } = ctaFields
  console.log(ctaFields)

  return (
    <Gutter>
      <div className={classes.wrapper}>
        <div className={classes.bg} />
        <Grid>
          <Cell cols={6}>
            <RichText className={classes.richText} content={richText} />
          </Cell>
          {feature === 'cpa' && (
            <Cell cols={5}>
              <div className={classes.cpa}>
                <label>From Command Line</label>
                <label className={classes.copyText}>$ &nbsp;&nbsp;npx create-payload-app</label>
              </div>
            </Cell>
          )}
        </Grid>
      </div>
    </Gutter>
  )
}
