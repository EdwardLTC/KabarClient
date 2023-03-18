// import { pokemonApi } from '@redux-setup/api';
import { AricleReducer, AuthReducer } from '@reduxs/reducers'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import EncryptedStorage from 'react-native-encrypted-storage'
import { apiService } from '@reduxs/api/apiService'
import { LoadingReducer } from '@reduxs/reducers/loadingReducer'
import { ThemeReducer } from '@reduxs/reducers/themeReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  themeApp: ThemeReducer,
  loading: LoadingReducer,
  getArticles: AricleReducer,
  // ...other reducers here
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  timeout: 30000,
  whitelist: ['counter'],
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    root: persistedReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiService.middleware),
})

export const persistor = persistStore(store)
