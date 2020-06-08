export const loginRequestedSelector = state => state.user.isLoading;

export const userLoggedInSelector = state => state.user.isLoggedIn;

export const jwtTokenSelector = state => state.user.jwtToken;