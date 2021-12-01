export const isLoggedIn = () => {
  return localStorage.getItem('doumiao-token') !== null;
}
