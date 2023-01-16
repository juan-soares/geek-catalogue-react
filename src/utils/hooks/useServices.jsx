export default function useServices() {
  async function getService(setList, url) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`);
    const { data } = await res.json();
    setList(data);
  }

  async function postService(inputValues, setInputValues, url) {
    const res = await fetch(`${process.env.REACT_APP_API}/${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });
    const { message } = await res.json();

    setInputValues({});

    window.alert(message);
  }

  return { getService, postService };
}
