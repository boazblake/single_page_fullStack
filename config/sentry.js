import Raven from 'raven-js';

const sentry_key = 'b0bc15a9f830496b86608089e088f8f1';
const sentry_app = '91935';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}


