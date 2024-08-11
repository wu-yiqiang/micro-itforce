export const isMicroApp = () => {
  // eslint-disable-next-line no-underscore-dangle
  console.log('is-micro', window?.__MICRO_APP_ENVIRONMENT__);
  // eslint-disable-next-line no-underscore-dangle
  if (window?.__MICRO_APP_ENVIRONMENT__) return true;
  return false;
};

export const getMicroAppData = () => {
  if (isMicroApp()) return window.microApp.getData();
  return null;
};
