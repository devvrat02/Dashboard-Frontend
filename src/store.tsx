import { configureStore } from '@reduxjs/toolkit';
import financeSlice from './reducers/Finance';
import authSlice from './reducers/authSlice';

// contactsSlice reducer for state management.
export const store= configureStore({
  reducer: {
      finance:financeSlice,
      auth:authSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch