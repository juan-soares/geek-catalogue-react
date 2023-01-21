import useServices from "./useServices";

export default function useForm() {
  const { getService, postService, deleteService } = useServices();

  function handleChange(e, inputValues, setInputValues) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
    console.log(inputValues);
  }

  async function handleSubmit(e, method, url, inputValues, setInputValues) {
    switch (method) {
      case "GET":
        {
          const data = await getService(url);
          setInputValues(data);
        }
        break;

      case "POST":
        {
          e.preventDefault();
          const confirm = window.confirm("Deseja salvar?");
          if (!confirm) return;

          const message = await postService(url, inputValues, setInputValues);
          window.alert(message);
        }
        break;

      case "DELETE":
        {
          const confirm = window.confirm("Deseja realmente excluir?");
          if (!confirm) return;
          const { message, data } = await deleteService(url, inputValues);
          window.alert(message);
          console.log(data);
          setInputValues(data);
        }
        break;

      default:
        "Method not found.";
    }
  }

  return { handleChange, handleSubmit };
}
