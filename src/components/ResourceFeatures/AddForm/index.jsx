import { useState } from "react";

import InputsCategory from "../Inputs/Category";

export default function ResourceFeaturesAddForm({ resource, setShowAddForm }) {
  const [inputsValues, setInputsValues] = useState({});

  return (
    <form>
      {resource.url === "category" && (
        <InputsCategory
          isInputDisable={false}
          categoryInputsValues={inputsValues}
          setCategoryInputsValues={setInputsValues}
        />
      )}
      <button onClick={() => setShowAddForm(false)}>Salvar</button>
    </form>
  );
}
