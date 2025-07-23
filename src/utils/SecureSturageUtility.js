import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

const options = { accessible: ACCESSIBLE.WHEN_UNLOCKED };

/**
 * Set multiple key-value pairs securely
 */
async function secureStorageMultiSet(params) {
  try {
    const obj = Object.fromEntries(params); // convert [['a', '1'], ['b', '2']] → { a: '1', b: '2' }
    await RNSecureStorage.multiSet(obj, options);
    console.log('Secure set data successful...', JSON.stringify(params));
    return true;
  } catch (e) {
    console.log('Unable to set secure data...', e, JSON.stringify(params));
    return e;
  }
}

/**
 * Get multiple keys securely
 */
async function secureStorageMultiGet(keys) {
  try {
    const res = await RNSecureStorage.multiGet(keys);
    console.log('Secure get data successful...', JSON.stringify(res));
    return res; // array of [key, value]
  } catch (e) {
    console.log('Unable to get secure data...', e, JSON.stringify(keys));
    return e;
  }
}

/**
 * Remove multiple keys securely
 */
async function clearSecureStorageData(keys) {
  try {
    const res = await RNSecureStorage.multiRemove(keys);
    console.log('Secure keys cleared...', JSON.stringify(keys));
    return res;
  } catch (e) {
    console.log('Unable to clear secure data...', e, JSON.stringify(keys));
    return e;
  }
}

/**
 * Get a single key
 */
async function secureStorageGetValue(key) {
  try {
    const val = await RNSecureStorage.getItem(key);
    return val;
  } catch (e) {
    console.log('Secure get single error:', key, e);
    return null;
  }
}

/**
 * Set a single key
 */
async function secureStorageSetValue(key, value) {
  try {
    await RNSecureStorage.setItem(key, value, options);
    return true;
  } catch (e) {
    console.log('Secure set single error:', key, e);
    return e;
  }
}

/**
 * Remove a single key
 */
async function secureStorageRemoveValue(key) {
  try {
    await RNSecureStorage.removeItem(key);
    return true;
  } catch (e) {
    console.log('Secure remove error:', key, e);
    return e;
  }
}

export {
  secureStorageMultiSet,
  secureStorageMultiGet,
  clearSecureStorageData,
  secureStorageGetValue,
  secureStorageSetValue,
  secureStorageRemoveValue,
};
