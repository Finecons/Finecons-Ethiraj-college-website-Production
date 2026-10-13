import { startLoading, stopLoading } from "../Slices/GlobalLoading";

export const loadingMiddleware = (store) => (next) => (action) => {
  // Check if the action is pending
  if (action.type.endsWith("/pending")) {
    store.dispatch(startLoading());
  }

  // Check if the action is fulfilled or rejected
  if (
    action.type.endsWith("/fulfilled") ||
    action.type.endsWith("/rejected")
  ) {
    store.dispatch(stopLoading());
  }

  return next(action);
};
