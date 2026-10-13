import { startLoading, stopLoading } from '../Slices/loadingSlice';

/**
 * Middleware to automatically track API call loading states
 * Watches for AsyncThunk pending/fulfilled/rejected actions
 */
export const loadingMiddleware = (store) => (next) => (action) => {
  // Check if this is an async thunk action
  const actionType = action.type;

  // Handle pending actions (API call started)
  if (actionType.endsWith('/pending')) {
    store.dispatch(startLoading());
  }

  // Handle fulfilled or rejected actions (API call completed)
  if (actionType.endsWith('/fulfilled') || actionType.endsWith('/rejected')) {
    store.dispatch(stopLoading());
  }

  // Always proceed with the original action
  return next(action);
};
