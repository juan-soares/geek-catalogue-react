export default function useGlobalSearchServices() {
  async function postGlobalSearch(searchedValue) {
    const res = await fetch(`${process.env.REACT_APP_API}/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(searchedValue),
    });
    const { data } = await res.json();
    return data;
  }

  return { postGlobalSearch };
}
