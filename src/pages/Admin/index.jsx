import { useState } from "react";

import AdminResourcesFeatures from "../../components/AdminResourcesFeatures";

export default function AdminPage() {
  const resources = ["Categorias", "Subcategorias"];
  const [selectedResource, setSelectedResource] = useState("");
  const [showAdminResourcesFeatures, setShowAdminResourcesFeatures] =
    useState(false);

  return (
    <div>
      <div>Admin Page</div>
      {resources.map((resource) => {
        return (
          <button
            key={resource}
            onClick={() => {
              setSelectedResource(resource);
              setShowAdminResourcesFeatures(true);
            }}
          >
            {resource}
          </button>
        );
      })}
      {showAdminResourcesFeatures && (
        <AdminResourcesFeatures selectedResource={selectedResource} />
      )}
    </div>
  );
}
