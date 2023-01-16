import useServices from "./useServices";

export default function useForm() {
  const { postService } = useServices();

  function handleChange(e, inputValues, setInputValues) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
    console.log(inputValues);
  }

  async function handleSubmit(e, inputValues, setInputValues, url) {
    e.preventDefault();

    const confirm = window.confirm("Deseja salvar?");

    if (!confirm) return null;

    const message = await postService(inputValues, setInputValues, url);

    window.alert(message);
  }

  return { handleChange, handleSubmit };
}
