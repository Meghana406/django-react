import Raven from 'raven-js';

const sentry_key = '72b27d3ca2d4405294a3df55703f9eff';
const sentry_app = '198739';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
