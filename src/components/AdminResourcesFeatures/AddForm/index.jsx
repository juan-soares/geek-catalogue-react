import AddFormCategoryInputs from "./CategoryInputs";
import useForm from "../../../shared/utils/hooks/useForm";
import { useState } from "react";

export default function AdminResourcesFeaturesAddForm({ selectedResource }) {
  const { handleChange, handleSubmit } = useForm();
  const [inputValues, setInputValues] = useState({});

  return (
    <form
      onSubmit={(e) => handleSubmit(e, inputValues, setInputValues, "category")}
    >
      {selectedResource === "Categorias" && (
        <AddFormCategoryInputs
          inputValues={inputValues}
          setInputValues={setInputValues}
          handleChange={handleChange}
        />
      )}
      <button>Salvar</button>
    </form>
  );
}
