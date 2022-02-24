export const isPersistedState = statename => {
  const sessionState = localStorage.getItem(statename);
  return sessionState && JSON.parse(sessionState);
};

export const persistedState = (statename, data) => {
  localStorage.setItem(statename, JSON.stringify(data));
  return;
};