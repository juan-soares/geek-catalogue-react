export default function useServices() {
  async function getService(url) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`);
    const { data } = await res.json();
    return data;
  }

  async function postService(url, inputValues, setInputValues) {
    if (url === "user") {
      setInputValues({ nickname: "" });
    }

    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const { message, data } = await res.json();

    if (url === "user" && data !== "") {
      setInputValues({ nickname: data });
    } else {
      setInputValues({});
    }
    return message;
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

  return { getService, postService, deleteService };
}
