export default function useCategoryServices() {
  async function getCategory() {
    const res = await fetch(`${process.env.REACT_APP_API}/category`);
    const { data } = await res.json();
    return data;
  }

  async function postCategory(inputValues, setInputValues) {
    const res = await fetch(`${process.env.REACT_APP_API}/category`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const data = await res.json();
    setInputValues(data);
  }

  return { getCategory, postCategory };
}
