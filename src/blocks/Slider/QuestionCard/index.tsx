'use client'
import React, { useContext } from 'react'
import classes from './index.module.scss'
import { HelperQuestionSet } from '../helpers/ConditionalBlockHelper'
import { AppCtx } from '@root/providers'

const { quoteCard, answerStyle, answerButton } = classes
export const QuestionCard = ({ id, prerequisite, question, answers }) => {
  const [questionSets, setQuestionSet] = React.useState<HelperQuestionSet[]>();
  const { dispatch } = useContext(AppCtx)
  const handleAnswerClick = (answer: React.MouseEventHandler<HTMLButtonElement>, id: string) => {
    const newQuestionSet = {
      id,
      question,
      prerequisite,
      result: `${question} = ${answer.target.innerText}`,
    }
    if (!questionSets?.some(qs => qs.id === id)) {
      setQuestionSet(questionSets ? [...questionSets, newQuestionSet] : [newQuestionSet])
    }
    // dispatch state so it can be sent to slider, where all questions are filtered
    dispatch({
      type: 'UPDATE_QUESTION_SET',
      value: newQuestionSet
    })
  };

  return (
    <div className={quoteCard}>
      <h1>{question}</h1>
      <div className={answerStyle}>{answers?.map(answerObj =>
        <button
          key={answerObj.id}
          className={answerButton}
          onClick={handleAnswerClick}
        >{answerObj.answer}</button>)}
      </div>
    </div>
  )
}
