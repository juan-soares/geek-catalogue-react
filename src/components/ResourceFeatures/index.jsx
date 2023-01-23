import { useEffect, useState } from "react";
import useForm from "../../utils/hooks/useForm";

export default function ResourceFeatures({ resource }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [resourceList, setResourceList] = useState([]);
  const { handleChange, handleSubmit } = useForm();
  const url =
    resource.url === "category" ? "category" : `category/${resource.url}`;

  useEffect(() => {
    setShowAddForm(false);
    handleSubmit(null, "GET", url, {}, setResourceList);
  }, [resource]);

  function InputsCategory({ isInputDesabled, inputValues, setInputValues }) {
    return (
      <>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          disabled={isInputDesabled}
          value={inputValues?.name ? inputValues.name : ""}
          onChange={(e) => handleChange(e, inputValues, setInputValues)}
        />
      </>
    );
  }
  function InputsSubcategory({ isInputDesabled, inputValues, setInputValues }) {
    return (
      <>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          disabled={isInputDesabled}
          value={inputValues?.name ? inputValues.name : ""}
          required
          onChange={(e) => handleChange(e, inputValues, setInputValues)}
        />
      </>
    );
  }

  function ResourceFeaturesAddForm({ selectedResource, setShowAddForm }) {
    const [inputValues, setInputValues] = useState({});

    return (
      <form
        onSubmit={async (e) => {
          await handleSubmit(
            e,
            "POST",
            url,
            inputValues,
            null,
            setResourceList
          );
          setInputValues({});
          setShowAddForm(false);
        }}
      >
        {selectedResource.url === "category" && (
          <InputsCategory
            isInputDesabled={false}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        )}
        {selectedResource.url === "subcategory" && (
          <InputsSubcategory
            isInputDesabled={false}
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        )}
        <button>Salvar</button>
      </form>
    );
  }

  function ResourceFeaturesListForm({
    selectedResource,
    resourceList,
    setResourceList,
  }) {
    function ListFormLi({ resourceItem }) {
      const [isInputDesabled, setIsInputDisabled] = useState(true);
      const [inputValues, setInputValues] = useState(resourceItem);

      return (
        <li>
          <form
            id={`form${resourceItem._id}`}
            onSubmit={async (e) => {
              await handleSubmit(e, "PUT", url, inputValues, setInputValues);
              setIsInputDisabled(true);
            }}
          >
            {selectedResource.url === "category" && (
              <InputsCategory
                isInputDesabled={isInputDesabled}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            )}
            {selectedResource.url === "subcategory" && (
              <InputsSubcategory
                isInputDesabled={isInputDesabled}
                inputValues={inputValues}
                setInputValues={setInputValues}
              />
            )}
          </form>
          {!isInputDesabled && (
            <button form={`form${resourceItem._id}`}>OK</button>
          )}
          {isInputDesabled && (
            <button onClick={() => setIsInputDisabled(false)}>ALT</button>
          )}
          <button
            onClick={async () => {
              await handleSubmit(
                null,
                "DELETE",
                url,
                { _id: resourceItem._id },
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
        {resourceList.map((resourceItem) => (
          <ListFormLi
            key={resourceItem._id}
            resourceItem={resourceItem}
            setResourceList={setResourceList}
          />
        ))}
      </ul>
    );
  }

  return (
    <section>
      <h1>{resource.title}</h1>
      {resource.url !== "category" && (
        <button onClick={() => setShowAddForm(!showAddForm)}>Adicionar</button>
      )}
      {showAddForm && (
        <ResourceFeaturesAddForm
          selectedResource={resource}
          setShowAddForm={setShowAddForm}
          setResourceList={setResourceList}
        />
      )}
      <ResourceFeaturesListForm
        selectedResource={resource}
        resourceList={resourceList}
        setResourceList={setResourceList}
      />
    </section>
  );
}
