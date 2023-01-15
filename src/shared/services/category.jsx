export default function useCategoryServices() {
  
  async function getCategory() {
    const res = await fetch(`${process.env.REACT_APP_API}/category`);
    const { data } = await res.json();
    return data;
  }

  return { getCategory };
}
