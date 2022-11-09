'use client'

import React from 'react'
import { Grid, Cell } from '@faceless-ui/css-grid'

import { PayloadIcon } from '@components/graphics/Icon'
import Form from '@components/forms/Form'
import { Text } from '@components/forms/fields/Text'
import { Button } from '@components/Button'
import analyticsEvent from '@root/utilities/analyticsEvent'
import InstagramIcon from '@components/graphics/SocialButtons/Instagram'
import YoutubeIcon from '@components/graphics/SocialButtons/YouTube'
import TwitterIcon from '@components/graphics/SocialButtons/Twitter'
import FacebookIcon from '@components/graphics/SocialButtons/Facebook'
import { CMSLink } from '@components/CMSLink'
import { Footer as FooterType } from '../../payload-types'
import classes from './index.module.scss'

export const Footer: React.FC<FooterType> = props => {
  const { columns } = props

  const hasColumns = Array.isArray(columns)

  const columnOne = hasColumns && columns.length > 0 && columns[0]
  const columnTwo = hasColumns && columns.length > 1 && columns[1]

  const hasColumnOneItems = Array.isArray(columnOne.navItems) && columnOne.navItems.length > 0
  const hasColumnTwoItems = Array.isArray(columnTwo.navItems) && columnTwo.navItems.length > 0

  const colTwoFilteredOne = columnTwo?.navItems.filter((item, index) => index < 9)
  const colTwoFilteredTwo = columnTwo?.navItems.filter((item, index) => index > 8)

  return (
    <footer className={classes.footer}>
      <Grid>
        {columnOne && (
          <Cell cols={3} start={2} colsM={4} startM={1} colsS={8}>
            <div className={classes.heading}>
              <PayloadIcon className={classes.payloadIcon} />
            </div>
            {hasColumnOneItems && (
              <ul className={classes.list}>
                {columnOne.navItems.map((item, index) => {
                  const { link } = item
                  return (
                    <li key={index}>
                      <CMSLink className={classes.navItem} {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </Cell>
        )}
        {columnTwo && (
          <Cell cols={4} colsS={8}>
            <div className={classes.heading}>
              <span className={classes.label}>Documentation</span>
            </div>
            <Grid>
              <Cell cols={2} colsS={4}>
                {hasColumnTwoItems && (
                  <ul className={classes.list}>
                    {colTwoFilteredOne.map((item, index) => {
                      const { link } = item
                      return (
                        <li key={index}>
                          <CMSLink className={classes.navItem} {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}
              </Cell>
              <Cell cols={2} colsS={4}>
                {hasColumnTwoItems && (
                  <ul className={classes.list}>
                    {colTwoFilteredTwo.map((item, index) => {
                      const { link } = item
                      return (
                        <li key={index}>
                          <CMSLink className={classes.navItem} {...link} />
                        </li>
                      )
                    })}
                  </ul>
                )}
              </Cell>
            </Grid>
          </Cell>
        )}
        <Cell cols={3} start={9} colsM={8} startM={1} className={classes.stayConnected}>
          <div className={classes.heading}>
            <span className={classes.label}>Stay connected</span>
          </div>
          <div className={classes.subscribe}>
            <Form
              method="POST"
              action="https://payloadcms.us18.list-manage.com/subscribe/post?u=f43c9eb62d4ce02e552a1fa9f&amp;id=e11798f237"
              onSubmit={() => analyticsEvent('newsletter')}
            >
              <div className={classes.inputWrap}>
                <Text
                  path="EMAIL"
                  required
                  placeholder="Enter your email"
                  className={classes.input}
                />
                <Text
                  path="b_f43c9eb62d4ce02e552a1fa9f_e11798f237"
                  type="hidden"
                  className={classes.hiddenInput}
                />
                <Button
                  className={classes.subscribeButton}
                  htmlButtonType="submit"
                  icon="arrowRight"
                />
              </div>
              <div className={classes.subscribeDesc}>
                <p className={classes.description}>
                  Sign up to receive periodic updates and feature releases to your email.
                </p>
                <Button className={classes.ok} label="OK" labelStyle="regular" />
              </div>
            </Form>
          </div>
        </Cell>
        <Cell cols={3} start={2} startM={1} colsS={8} className={classes.socialWrap}>
          <div className={classes.social}>
            <a
              href="https://www.instagram.com/payloadcms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.socialIcon} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCyrx4Wpd4SBIpqUKlkb6N1Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon className={classes.socialIcon} />
            </a>
            <a href="https://twitter.com/payloadcms" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className={classes.socialIcon} />
            </a>
            <a
              href="https://www.facebook.com/payloadcms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={classes.socialIcon} />
            </a>
          </div>
        </Cell>
        <Cell cols={4} colsS={8} className={classes.copyrightWrap}>
          <div className={classes.copyright}>
            Copyright {new Date().getFullYear()} Payload CMS, Inc.
          </div>
        </Cell>
      </Grid>
    </footer>
  )
}
