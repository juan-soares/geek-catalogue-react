import { useEffect, useState } from "react";
import useForm from "../../utils/hooks/useForm";

export default function ResourceFeatures({ resourceSelected }) {
  function InputsCategory({
    isDisabled,
    resourceInputValues,
    setResourceInputValues,
  }) {
    const { handleChange } = useForm();

    return (
      <>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          value={resourceInputValues?.name ? resourceInputValues.name : ""}
          onChange={(e) =>
            handleChange(e, resourceInputValues, setResourceInputValues)
          }
          disabled={isDisabled}
        />
      </>
    );
  }
  function InputsCategorySubcategories({
    isDisabled,
    resourceInputValues,
    setResourceInputValues,
  }) {
    const { handleChange } = useForm();

    return (
      <>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          value={resourceInputValues?.name ? resourceInputValues.name : ""}
          onChange={(e) =>
            handleChange(e, resourceInputValues, setResourceInputValues)
          }
          disabled={isDisabled}
        />
      </>
    );
  }
  function ResourceFeaturesInputs({
    resourceSelected,
    isDisabled,
    resourceInputValues,
    setResourceInputValues,
  }) {
    return (
      <>
        {resourceSelected.url === "category" && (
          <InputsCategory
            isDisabled={isDisabled}
            resourceItem={resourceInputValues}
            resourceInputValues={resourceInputValues}
            setResourceInputValues={setResourceInputValues}
          />
        )}
        {resourceSelected.url !== "category" && (
          <InputsCategorySubcategories
            isDisabled={isDisabled}
            resourceItem={resourceInputValues}
            resourceInputValues={resourceInputValues}
            setResourceInputValues={setResourceInputValues}
          />
        )}
      </>
    );
  }

  function ResourceFeaturesAdd({ resourceSelected, setResourceList }) {
    const [showForm, setShowForm] = useState(false);
    const [resourceInputValues, setResourceInputValues] = useState({});

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
  function ResourceFeaturesList({
    resourceSelected,
    resourceList,
    setResourceList,
  }) {
    function ListLi({ resourceItem, resourceSelected, setResourceList }) {
      const [isDisabled, setIsDisabled] = useState(true);
      const [resourceInputValues, setResourceInputValues] =
        useState(resourceItem);

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
                setResourceList
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
        </li>
      );
    }

    return (
      <ul>
        {resourceList[0] === "loading" && <label>Carregando...</label>}
        {resourceList[0] !== "loading" &&
          resourceList.map((resourceItem) => (
            <ListLi
              resourceItem={resourceItem}
              resourceSelected={resourceSelected}
              setResourceList={setResourceList}
              key={resourceItem._id}
            />
          ))}
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
        null,
        null,
        setResourceList
      );
    }
    get();
  }, [resourceSelected]);

  return (
    <section>
      <h1>{resourceSelected.title}</h1>

      {resourceSelected.url !== "category" && (
        <ResourceFeaturesAdd
          resourceSelected={resourceSelected}
          setResourceList={setResourceList}
        />
      )}

      <ResourceFeaturesList
        resourceSelected={resourceSelected}
        resourceList={resourceList}
        setResourceList={setResourceList}
      />
    </section>
  );
}
