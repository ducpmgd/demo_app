export function useAuth() {
  const auth =
    localStorage.getItem("auth") &&
    JSON.parse(localStorage.getItem("auth") || "");
  if (auth && auth.token) {
    return { isLogin: true, username: auth.username };
  } else {
    return { isLogin: false };
  }
}
