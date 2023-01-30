import useServices from "./useServices";

export default function useForm() {
  const { getService, postService, putService, deleteService } = useServices();

  function handleChange(e, inputValues, setInputValues) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }

  async function handleSubmit(
    e,
    method,
    url,
    inputValues,
    setInputValues,
    setList
  ) {
    switch (method) {
      case "GET":
        {
          setList(["loading"]);
          const data = await getService(url);
          setList(data);
        }
        break;

      case "POST":
        {
          e.preventDefault();
          const confirm = window.confirm("Deseja salvar?");
          if (!confirm) return;
          if (setList) setList(["loading"]);
          const { message, data } = await postService(url, inputValues);
          setList ? setList(data) : setInputValues(data);
          window.alert(message);
        }
        break;
      case "PUT":
        {
          e.preventDefault();
          const confirm = window.confirm("Deseja salvar?");
          if (!confirm) return;
          const { message, data } = await putService(url, inputValues);
          setInputValues(data);
          window.alert(message);
        }
        break;
      case "DELETE":
        {
          const confirm = window.confirm("Deseja realmente excluir?");
          if (!confirm) return;
          const { message, data } = await deleteService(url, inputValues);
          window.alert(message);

          setList(data);
        }
        break;

      default:
        "Method not found.";
    }
  }

  return { handleChange, handleSubmit };
}
