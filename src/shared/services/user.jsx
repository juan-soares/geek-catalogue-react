export default function useUserServices() {
  async function postUserLogin(credentials) {
    const res = await fetch(`${process.env.REACT_APP_API}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const searchedUser = await res.json();
    return searchedUser;
  }

  return { postUserLogin };
}
