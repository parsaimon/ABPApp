import { BASEURL, APP_ENV } from '@env';
const live = BASEURL;
const local = BASEURL;
const version = 'v2';
export default {
  BASEURL: APP_ENV ? `${live}/api/${version}/` : `${local}/api/${version}/`,
  APP_NAME: 'Anandabazar.com',
  ERROR_MESSAGE: 'Unable to connect to server, Please try again later.',
  TIMEOUT_ERROR_MESSAGE: 'Request timeout',
  FALLBACK_URL: 'https://www.anandabazar.com/',
};
