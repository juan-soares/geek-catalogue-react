import { useEffect, useState } from "react";
import useForm from "../../utils/hooks/useForm";

export default function ResourceFeatures({ resourceSelected }) {
  function InputsCategory({ resourceSelected, isDisabled }) {
    return (
      <>
        <label>Nome: </label>
        <input type="text" value={resourceSelected.url} disabled={isDisabled} />
      </>
    );
  }
  function InputsCategorySubcategories({ resourceSelected, isDisabled }) {
    return (
      <>
        <label>Nome: </label>
        <input type="text" value={resourceSelected.url} disabled={isDisabled} />
      </>
    );
  }
  function ResourceFeaturesInputs({ resourceSelected, isDisabled }) {
    return (
      <>
        {resourceSelected.url === "category" && (
          <InputsCategory
            resourceSelected={resourceSelected}
            isDisabled={isDisabled}
          />
        )}
        {resourceSelected.url !== "category" && (
          <InputsCategorySubcategories
            resourceSelected={resourceSelected}
            isDisabled={isDisabled}
          />
        )}
      </>
    );
  }

  function ResourceFeaturesAdd({ resourceSelected }) {
    const [showForm, setShowForm] = useState(false);
    return (
      <div>
        <button onClick={() => setShowForm(!showForm)}>ADICIONAR</button>
        {showForm && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowForm(false);
            }}
          >
            <ResourceFeaturesInputs
              resourceSelected={resourceSelected}
              isDisabled={false}
            />
            <button>Salvar</button>
          </form>
        )}
      </div>
    );
  }
  function ResourceFeaturesList({ resourceSelected }) {
    const [isDisabled, setIsDisabled] = useState(true);

    return (
      <ul>
        <li>
          <form>
            <ResourceFeaturesInputs
              resourceSelected={resourceSelected}
              isDisabled={isDisabled}
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
            <button
              onClick={() => {
                setIsDisabled(true);
              }}
            >
              OK
            </button>
          )}
          <button>DEL</button>
        </li>
      </ul>
    );
  }

  const [resourceList, setResourceList] = useState([]);
  const { handleSubmit } = useForm();

  useEffect(() => {
    async function get() {
      await handleSubmit(
        null,
        "GET",
        resourceSelected.url,
        {},
        setResourceList
      );
    }
    get();
  }, [resourceSelected]);

  return (
    <section>
      <h1>{resourceSelected.title}</h1>
      <ResourceFeaturesAdd resourceSelected={resourceSelected} />
      <ResourceFeaturesList resourceSelected={resourceSelected} />
    </section>
  );
}
