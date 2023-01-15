import { useState } from "react";
import useForm from "../../../shared/utils/hooks/useForm";

export default function FormCategory() {
  const [inputValues, setInputValues] = useState({ name: "" });
  const { handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={(e) => handleSubmit(e, inputValues, setInputValues, "category")}>
      <label>Nome: </label>
      <input
        type="text"
        id="name"
        value={inputValues.name}
        onChange={(e) => handleChange(e, inputValues, setInputValues)}
        required
      />
      <button>Salvar</button>
    </form>
  );
}
