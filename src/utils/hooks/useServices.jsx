export default function useServices() {
  async function getService(url) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`);
    const { data } = await res.json();
    return data;
  }

  async function postService(url, inputValues) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const { message, data } = await res.json();
    return { message, data };
  }

  async function putService(url, inputValues) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const { message, data } = await res.json();
    return { message, data };
  }

  async function deleteService(url, itemToDelete) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemToDelete),
    });
    const { message, data } = await res.json();
    return { message, data };
  }

  return { getService, postService, putService, deleteService };
}
