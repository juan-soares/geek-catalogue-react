import { useState } from "react";
import useForm from "../../../utils/hooks/useForm";
import ResourceFeaturesInputs from "../Inputs";

export default function ResourceFeaturesAdd({
  resourceSelected,
  setResourceList,
}) {
  const [showForm, setShowForm] = useState(false);
  const [resourceInputValues, setResourceInputValues] = useState({});
  const { handleSubmit } = useForm();

  return (
    <div>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        ADICIONAR
      </button>
      {showForm && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(
              e,
              "POST",
              resourceSelected.url,
              resourceInputValues,
              null,
              setResourceList
            );

            setShowForm(false);
          }}
        >
          <ResourceFeaturesInputs
            resourceSelected={resourceSelected}
            isDisabled={false}
            resourceInputValues={resourceInputValues}
            setResourceInputValues={setResourceInputValues}
          />
          <button>Salvar</button>
        </form>
      )}
    </div>
  );
}
