import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AlertPayload, CommonState } from '@reduxs/types'
import { RootReducerName } from './type'

const defaultCampaignState: CommonState = {
  modals: {},
  alerts: {},
}

const commonSlice = createSlice({
  name: RootReducerName.common,
  initialState: defaultCampaignState,
  reducers: {
    showAlert(state: CommonState, action: PayloadAction<AlertPayload>) {
      state.alerts[action.payload.id] = {
        ...action.payload,
        isVisible: true,
      }
    },
    closeAlert(
      state: CommonState,
      action?: PayloadAction<{ id: string } | undefined>,
    ) {
      return closeReducer(state.alerts, action?.payload)
    },
    dismissAlert(
      state: CommonState,
      action?: PayloadAction<{ id: string } | undefined>,
    ) {
      return dismissReducer(state.alerts, action?.payload)
    },
    showModal(
      state: CommonState,
      action: PayloadAction<{ id: string; customProps?: any }>,
    ) {
      state.modals[action.payload.id] = {
        id: action.payload.id,
        isVisible: true,
        customProps: action.payload.customProps || {},
      }
    },
    closeModal(
      state: CommonState,
      action?: PayloadAction<{ id: string } | undefined>,
    ) {
      return closeReducer(state.modals, action?.payload)
    },

    removeModal(
      state: CommonState,
      action?: PayloadAction<{ id: string } | undefined>,
    ) {
      return dismissReducer(state.modals, action?.payload)
    },
  },
})

export const {
  showAlert,
  closeAlert,
  dismissAlert,
  closeModal,
  removeModal,
  showModal,
} = commonSlice.actions
export const CommonReducer = commonSlice.reducer

const closeReducer = (object: any = {}, payload?: { id: string }) => {
  if (payload) {
    object[payload.id] = { ...object[payload.id], isVisible: false }
  } else {
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const alert = object[key]
        alert.isVisible = false
      }
    }
  }
}

const dismissReducer = (object: any = {}, payload?: { id: string }) => {
  if (payload) {
    delete object[payload.id]
  } else {
    object = {}
  }
}
