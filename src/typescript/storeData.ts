
interface Data {
  keyName: string,
  keyValue?: string,
};

export const setDataToLocalStorage = ({keyName, keyValue}: Data): void => {
  return localStorage.setItem(keyName, JSON.stringify(keyValue ? keyValue : ''));
};

export const getDataFromLocalStorage = ({keyName}: Data): string | null => {
  return localStorage.getItem(keyName);
};