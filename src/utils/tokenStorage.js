const TOKEN_KEY = "token";

export function getToken() {
  if (typeof window === "undefined") return null;
  try {
    return (
      window.localStorage.getItem(TOKEN_KEY) ||
      window.sessionStorage.getItem(TOKEN_KEY)
    );
  } catch {
    return null;
  }
}

export function setToken(token, remember = true) {
  if (typeof window === "undefined") return;
  clearToken();
  try {
    if (remember) {
      window.localStorage.setItem(TOKEN_KEY, token);
    } else {
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  } catch {
    // storage unavailable (private mode / quota) — session stays in memory only
  }
}

export function clearToken() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    // ignore
  }
}
