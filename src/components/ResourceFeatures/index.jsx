import { useEffect, useState } from "react";

export default function ResourceFeatures({ resource }) {
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => setShowAddForm(false), [resource]);

  function InputsCategory({ isInputDesabled }) {
    return (
      <>
        <label>Nome: </label>
        <input type="text" disabled={isInputDesabled} />
      </>
    );
  }
  function InputsSubcategory({ isInputDesabled }) {
    return (
      <>
        <label>Nome: </label>
        <input type="text" disabled={isInputDesabled} />
      </>
    );
  }

  function ResourceFeaturesAddForm({ selectedResource, setShowAddForm }) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowAddForm(false);
        }}
      >
        {selectedResource.url === "category" && (
          <InputsCategory isInputDesabled={false} />
        )}
        {selectedResource.url === "subcategory" && (
          <InputsSubcategory isInputDesabled={false} />
        )}
        <button>Salvar</button>
      </form>
    );
  }

  function ResourceFeaturesListForm({ selectedResource }) {
    const [isInputDesabled, setIsInputDisabled] = useState(true);

    return (
      <>
        <form>
          {selectedResource.url === "category" && (
            <InputsCategory isInputDesabled={isInputDesabled} />
          )}
          {selectedResource.url === "subcategory" && (
            <InputsSubcategory isInputDesabled={isInputDesabled} />
          )}
        </form>
        <button
          onClick={() => {
            if (!isInputDesabled) {
              window.alert("Salvo!");
            }
            setIsInputDisabled(!isInputDesabled);
          }}
        >
          {isInputDesabled ? "ALT" : "OK"}
        </button>
        <button>DEL</button>
      </>
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
        />
      )}
      <ResourceFeaturesListForm selectedResource={resource} />
    </section>
  );
}
