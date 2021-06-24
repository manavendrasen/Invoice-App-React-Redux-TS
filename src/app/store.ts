import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import invoiceReducer from '../features/invoice/invoiceSlice'
export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
