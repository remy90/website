import { Slider } from '@blocks/Slider/'
import { OhmeLogo } from '@components/OhmeLogo'
import { QuestionSet } from '@root/payload-types'
import { notFound } from 'next/navigation'
import React from 'react'
import { fetchQuestionSets } from '../../graphql'

const Page = async () => {
  const questionSets: QuestionSet = await fetchQuestionSets();
  const sliderFields = {
    useLeadingHeader: false,
    leadingHeader: [{ "[k: string]": "unknown" }],
    sliderType: "questionSlider",
    imageSlides: [{ image: "", id: "" }],
    quoteSlides: [{ quoteDate: '', richText: [{ "": "" }] }],
    //@ts-ignore
    questionSlides: questionSets.data.QuestionSets.docs
  }

  return !questionSets
    ? notFound()
    : (<>
      <OhmeLogo />
      <Slider blockType='slider' sliderFields={sliderFields} />
    </>)
}

export default Page

export async function generateStaticParams() {
  const questionSets = await fetchQuestionSets()
  return questionSets.data.QuestionSets.docs.find(doc => doc.slug).questionSet.questionSet.map(() => ({
    slug: questionSets.data.QuestionSets.docs.map(doc => doc.slug),
  }))
}
