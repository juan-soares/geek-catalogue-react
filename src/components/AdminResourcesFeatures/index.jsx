import { useState } from "react";
import AdminResourcesFeaturesAddForm from "./AddForm";

export default function AdminResourcesFeatures({ selectedResource }) {
  const [
    showAdminResourcesFeaturesAddForm,
    setShowAdminResourcesFeaturesAddForm,
  ] = useState(false);

  return (
    <div>
      <h2>{selectedResource}</h2>
      <ul>
        <li>
          <button onClick={() => setShowAdminResourcesFeaturesAddForm(true)}>
            Adicionar
          </button>
          {showAdminResourcesFeaturesAddForm && (
            <AdminResourcesFeaturesAddForm
              selectedResource={selectedResource}
            />
          )}
        </li>
        <li>
          <button>ALT</button>
          <button>DEL</button>
        </li>
      </ul>
    </div>
  );
}
