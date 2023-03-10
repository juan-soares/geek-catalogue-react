export default function useForm() {
  function handleChange(e, oldState, setState) {
    setState({ ...oldState, [e.target.id]: e.target.value });
    console.log(oldState);
  }

  async function handleSubmit(
    e,
    formMethod,
    url,
    inputValues,
    setInputValues,
    setResData
  ) {
    e.preventDefault();
    const confirm = window.confirm("Deseja confirmar?");

    if (!confirm) return;

    const res = await fetch(process.env.REACT_APP_API + url, {
      method: formMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValues),
    });

    const { data, message } = await res.json();

    window.alert(message);
    if (data) {setResData(data); };

    setInputValues({});
  }

  return { handleChange, handleSubmit };
}
