export const QUESTION_SETS = `
query {
  QuestionSets {
    docs {
      slug
      questionSet {
        questionSet {
          id
          question
          answers {
            answer
            id
          }
          prerequisite
          id
        }
      }
    }
  }
}
`
