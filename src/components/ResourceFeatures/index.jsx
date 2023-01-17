import { useState } from "react";
import ResourceFeaturesAddForm from "./AddForm";
import ResourceFeaturesListForm from "./ListForm";

export default function ResourceFeatures({ resource }) {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section>
      <h1>{resource.title}</h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>Adicionar</button>

      {showAddForm && (
        <ResourceFeaturesAddForm
          resource={resource}
          setShowAddForm={setShowAddForm}
        />
      )}
      <ResourceFeaturesListForm resource={resource} />
    </section>
  );
}
