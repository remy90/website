export interface HelperQuestionSet {
  index?: number
  id: string
  question: string
  answers?: { id: string, answer: string }[]
  prerequisite: string
  result?: string
}

export const getFilteredItems: (items: HelperQuestionSet[]) => HelperQuestionSet[] = (items: HelperQuestionSet[]) =>
  items.filter((item) => !item.prerequisite || !item.id)

export const getPrerequisiteItems: (items: HelperQuestionSet[]) => HelperQuestionSet[] = (
  items: HelperQuestionSet[],
) => items.filter((item) => item.prerequisite)

export const getLatestItemList: (
  HelperQuestionSet: HelperQuestionSet[],
  filteredItems: HelperQuestionSet[],
  prerequisiteItems: HelperQuestionSet[],
) => HelperQuestionSet[] = (
  questionSet: HelperQuestionSet[],
  filteredItems: HelperQuestionSet[],
  prerequisiteItems: HelperQuestionSet[],
) => prerequisiteItems
  .filter((item) => {
    const itemPrerequisites = item.prerequisite?.split(';')

    if (!itemPrerequisites || !item.id) return false

    // check all answers to see if all prerequisites are satisfied
    // eslint-disable-next-line max-len
    const allItemPrerequisitesAreMet = itemPrerequisites.every((prerequisite) =>
      questionSet.some((qs) => qs.answers?.find(answerObj => answerObj.answer.includes(prerequisite))))

    return allItemPrerequisitesAreMet
  })
  .concat(filteredItems)
  .sort((a, b) => a.index - b.index)

export const getLatestItemList2: (
  HelperQuestionSet: HelperQuestionSet[],
  filteredItems: HelperQuestionSet[],
  prerequisiteItems: HelperQuestionSet[],
) => HelperQuestionSet[] = (
  questionSet: HelperQuestionSet[],
  filteredItems: HelperQuestionSet[],
  prerequisiteItems: HelperQuestionSet[],
) => prerequisiteItems
  .filter((item) => {
    if (!item.prerequisite || !item.id) return false

    // check all answers to see if all prerequisites are satisfied
    // eslint-disable-next-line max-len
    const allItemPrerequisitesAreMet = questionSet.filter(qs => qs)
    return allItemPrerequisitesAreMet
  })
  .concat(filteredItems)
  .sort((a, b) => a.index - b.index)
