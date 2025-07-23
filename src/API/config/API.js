import { Platform } from 'react-native';
import axios from 'axios';
import Constants from '../../utils/Constants';

const handleTimeout = timeout => {
  return new Promise((_, reject) =>
    setTimeout(
      () => reject(new Error(Constants.TIMEOUT_ERROR_MESSAGE)),
      timeout,
    ),
  );
};

const get = async (uri = '', timeout = 10000) => {
  let headers = {
    'Content-Type': 'application/json',
  };
  console.log('headers get', headers);
  const axiosPromise = axios.get(`${Constants.BASEURL}${uri}`, { headers });
  const timeoutPromise = handleTimeout(timeout);

  try {
    const axiosGetRequest = await Promise.race([axiosPromise, timeoutPromise]);

    console.log(uri + '_response', axiosGetRequest.data);
    return axiosGetRequest;
  } catch (error) {
    console.log(uri + '_error', error.response?.data);

    if (error.response?.status === 401) {
      // Handle unauthorized access
    }

    if (error.message === TIMEOUT_ERROR_MESSAGE) {
      console.log('Timeout error occurred');
      // Handle timeout error here
    }

    return Promise.reject(error);
  }
};
export default { get };
