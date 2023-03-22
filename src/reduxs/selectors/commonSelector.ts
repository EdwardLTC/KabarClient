import { RootReducerName } from '@reduxs/reducers/type'
import { CommonState } from '@reduxs/types'
import { createSelector } from 'reselect'

export const getAlertState = (state: {
  root: { [RootReducerName.common]: CommonState }
}) => Object.values(state.root.common.alerts)

export const getModalState = (state: {
  root: { [RootReducerName.common]: CommonState }
}) => state.root.common.modals

export const getModalById = (id: string) =>
  createSelector(getModalState, (modals) => {
    return modals[id] || { isVisible: false }
  })
