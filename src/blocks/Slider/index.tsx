'use client'
import React, { useContext, useMemo } from 'react'
import { SliderProvider, SliderNav, SliderTrack, Slide } from '@faceless-ui/slider'
import { Gutter } from '@components/Gutter'
import { Page } from '@root/payload-types'
import { ArrowIcon } from '../../icons/ArrowIcon'
import { QuestionCard } from './QuestionCard'
import classes from './index.module.scss'
import { getFilteredItems, getLatestItemList, getPrerequisiteItems, HelperQuestionSet } from './helpers/ConditionalBlockHelper'
import { AppCtx } from '@root/providers'

type Props = Extract<Page['layout'][0], { blockType: 'slider' }>

export const SliderBlock: React.FC<Props> = ({ sliderFields }) => {
  /**
   * {
   * "data":{
   *   "QuestionSets": {
   *     "docs": [{
   *       "slug":"solar",
   *       "questionSet": {
   *         "questionSet":[{
   *           "id":"63e688c5fce414d6819c2749",
   *           "question":"Do you have solar panels?",
   *           "answers": [{
   *             "answer":"Yes",
   *             "id":"63e688d7fce414d6819c274a"
   *           },
   *          { 
   *             "answer":"No",
   *             "id":"63e688dbfce414d6819c274b"}],
   *             "prerequisite":null},
   *          {
   *             "id":"63e688e3fce414d6819c274c",
   *             "question":"How many?",
   *             "answers":[{"answer":"1",
   *             "id":"63e688e9fce414d6819c274d"
   *           },
   *          {"answer":"2",
   *             "id":"63e688ebfce414d6819c274e"
   *           },
   *          {"answer":"3+",
   *             "id":"63e688ecfce414d6819c274f"}],"prerequisite":"Do you have solar panels? = Yes"
   *           },
   *          {"id":"63e688f3fce414d6819c2750",
   *             "question":"Do you intend on purchasing solar panels in the next six months?",
   *             "answers":[{"answer":"Yes",
   *             "id":"63e68902fce414d6819c2751"
   *           },
   *          {"answer":"No",
   *             "id":"63e68905fce414d6819c2752"}],"prerequisite":"Do you have solar panels? = No"
   *           },
   *          {"id":"63e6890dfce414d6819c2753",
   *             "question":"Would you be interested in charging your EV with solar panels?",
   *             "answers":[{"answer":"Yes",
   *             "id":"63e68923fce414d6819c2754"
   *           },
   *          {"answer":"No",
   *             "id":"63e68927fce414d6819c2755"}],"prerequisite":"How many? = 3+"}]}}]}}}
   */

  if (!sliderFields) return;
  console.log('blem', JSON.stringify(sliderFields?.questionSlides[0].questionSet))
  //@ts-ignore
  const slides: HelperQuestionSet[] = sliderFields?.questionSlides[0].questionSet.questionSet.map((qs: QuestionSet, i: number) => ({
    index: i,
    ...qs
  }))
  console.log('slides', slides)
  if (!slides || slides.length === 0) return null

  const { state } = useContext(AppCtx)

  const latestSlides = useMemo(() => {
    return slides
      .filter(slide =>
        !slide.prerequisite || state.questionSets?.some(qs => qs.result === slide.prerequisite))
      .sort((a, b) => a.index - b.index);
  }, [state.questionSets.length])
  console.log('latestSlides', latestSlides)
  return (
    <div className={[classes.slider].filter(Boolean).join(' ')}>
      <Gutter>
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
        {latestSlides
          .map((slide, index) => (
            <Slide key={index} index={index} className={classes.slide}>
              <QuestionCard {...slide} />
            </Slide>
          ))}
      </SliderTrack>
      <div className={classes.progressBarBackground} />
    </div>
  )
}

export const Slider: React.FC<Props> = props => {
  return (
    <SliderProvider slidesToShow={1} scrollSnap>
      <SliderBlock {...props} />
    </SliderProvider>
  )
}
