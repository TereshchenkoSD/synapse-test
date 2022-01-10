export function onLocalStorageSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function onLocalStorageRemove(key) {
  localStorage.removeItem(key);
}

export function onLocalStorageRead(key) {
  return JSON.parse(localStorage.getItem(key));
}
