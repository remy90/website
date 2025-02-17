'use client'
import React, { createContext, Dispatch, useReducer } from 'react'
import { ScrollInfoProvider } from '@faceless-ui/scroll-info'
import { MouseInfoProvider } from '@faceless-ui/mouse-info'
import { GridProvider } from '@faceless-ui/css-grid'
import { ModalContainer, ModalProvider } from '@faceless-ui/modal'
import { WindowInfoProvider } from '@faceless-ui/window-info'
import HeaderThemeProvider from './HeaderTheme'
import { ThemePreferenceProvider } from './Theme'
import { ComputedCSSValuesProvider } from './ComputedCSSValues'
import { questionReducer, ReducerAction, ReducerData } from '@root/reducers/questionReducer'
import { HelperQuestionSet } from '@blocks/Slider/helpers/ConditionalBlockHelper'

const AppCtx = createContext<{ state: ReducerData, dispatch: Dispatch<ReducerAction> }>({
  state: {} as ReducerData,
  dispatch: () => ({})
});

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialState = {
    questionSets: [] as HelperQuestionSet[],
  };

  const [state, dispatch] = useReducer(questionReducer, initialState);

  return (
    <ScrollInfoProvider>
      <MouseInfoProvider>
        <WindowInfoProvider
          breakpoints={{
            s: '(max-width: 768px)',
            m: '(max-width: 1100px)',
            l: '(max-width: 1600px)',
          }}
        >
          <ThemePreferenceProvider>
            <GridProvider
              breakpoints={{
                s: 768,
                m: 1024,
                l: 1680,
              }}
              rowGap={{
                s: '1rem',
                m: '1rem',
                l: '2rem',
                xl: '4rem',
              }}
              colGap={{
                s: 'var(--base)',
                m: 'calc(var(--base) * 2)',
                l: 'calc(var(--base) * 2)',
                xl: 'calc(var(--base) * 3)',
              }}
              cols={{
                s: 8,
                m: 8,
                l: 12,
                xl: 12,
              }}
            >
              <ComputedCSSValuesProvider>
                <ModalProvider transTime={0} zIndex="var(--z-modal)">
                  <HeaderThemeProvider>
                    <AppCtx.Provider value={{ state, dispatch }}>
                      {children}
                    </AppCtx.Provider>
                    <ModalContainer />
                  </HeaderThemeProvider>
                </ModalProvider>
              </ComputedCSSValuesProvider>
            </GridProvider>
          </ThemePreferenceProvider>
        </WindowInfoProvider>
      </MouseInfoProvider>
    </ScrollInfoProvider>
  )
}

export { Providers, AppCtx }
