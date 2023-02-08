import { useState } from "react";
import handleForm from "../../../../utils/hooks/useForm";
import ResourceFeaturesInputs from "../../Inputs";

export default function ListLi({
  resourceItem,
  resourceSelected,
  setResourceList,
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [resourceInputValues, setResourceInputValues] = useState(resourceItem);
  const { handleSubmit } = handleForm();

  return (
    <li key={resourceItem._id}>
      <form
        id={resourceItem._id}
        onSubmit={(e) => {
          handleSubmit(
            e,
            "PUT",
            resourceSelected.url,
            resourceInputValues,
            setResourceInputValues,
            null
          );
          setIsDisabled(true);
        }}
      >
        <ResourceFeaturesInputs
          resourceSelected={resourceSelected}
          isDisabled={isDisabled}
          resourceInputValues={resourceInputValues}
          setResourceInputValues={setResourceInputValues}
        />
      </form>
      {isDisabled && (
        <button
          onClick={() => {
            setIsDisabled(false);
          }}
        >
          ALT
        </button>
      )}
      {!isDisabled && (
        <button type="submit" form={resourceItem._id}>
          OK
        </button>
      )}
      {resourceSelected.url !== "category" && (
        <button
          onClick={async () => {
            await handleSubmit(
              null,
              "DELETE",
              resourceSelected.url,
              { _id: resourceItem._id },
              null,
              setResourceList
            );
          }}
        >
          DEL
        </button>
      )}
    </li>
  );
}
