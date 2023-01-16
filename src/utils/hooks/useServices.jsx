export default function useServices() {
  async function getService(setList, url) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`);
    const { data } = await res.json();
    setList(data);
  }

  async function postService(inputValues, setInputValues, url) {
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

  return { getService, postService };
}
