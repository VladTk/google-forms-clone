import { configureStore } from '@reduxjs/toolkit'
import { formsApi } from '../shared/api/formsApi'
import { responsesApi } from '../shared/api/responsesApi'

export const store = configureStore({
  reducer: {
    [formsApi.reducerPath]: formsApi.reducer,
    [responsesApi.reducerPath]: responsesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      formsApi.middleware,
      responsesApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
