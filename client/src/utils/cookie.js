const getCookie = (name) => {
  const cookies = document.cookie;

  const cookie = cookies
    .split('; ')
    .find(cookieRow => cookieRow.startsWith(`${name}=`));
  
  const cookieValue = cookie ? cookie.split('=')[1] : undefined;
  
  return cookieValue;
};

const setCookie = (name, value, expiryInHours) => {
  const expiryDate = new Date();
  expiryDate.setTime(expiryDate.getTime() + ((expiryInHours - 3) * 60 * 60 * 1000));
  const expires = `expires=${expiryDate.toUTCString()}`;

  document.cookie = `${name}=${value};${expires};path=/`;
};

const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
};

const cookieUtl = {
  getCookie,
  deleteCookie,
  setCookie,
};

export default cookieUtl;