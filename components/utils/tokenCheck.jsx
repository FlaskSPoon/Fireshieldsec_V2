import jwtDecode from "jwt-decode"; // l'import par défaut sans accolades

import { removeLocalStorageItem } from "./storage";

export const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken?.exp && decodedToken.exp < currentTime;
  } catch (e) {
    return true;
  }
};

const logout = () => {
  removeLocalStorageItem("user");
  removeLocalStorageItem("accessToken");
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const checkTokenValidity = () => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    logout();
  }
};
