export const isPersistedState = statename => {
  const sessionState = sessionStorage.getItem(statename);
  return sessionState && JSON.parse(sessionState);
};

export const persistedState = (statename, data) => {
  sessionStorage.setItem(statename, JSON.stringify(data));
  return;
};