import { HelperQuestionSet } from './../blocks/Slider/helpers/ConditionalBlockHelper';
import { Reducer } from 'react';

export type ReducerData = {
  questionSets: HelperQuestionSet[],
}
export type ReducerAction = {
  type: string,
  value: any
}
export const questionReducer: Reducer<ReducerData, ReducerAction> = (state, action) => {
  switch (action.type) {
    case 'UPDATE_QUESTION_SET': {
      return {
        ...state,
        questionSets: [
          ...state.questionSets,
          action.value
        ]
      };
    }
    default:
      return state;
  }
};
