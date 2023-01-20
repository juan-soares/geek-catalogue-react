import { useState } from "react";
import ResourceFeatures from "../../components/ResourceFeatures";

export default function AdminPage() {
  const resources = [
    { title: "Categorias", url: "category" },
    { title: "Subcategorias", url: "subcategory" },
  ];
  const [showResourceFeatures, setShowResourceFeatures] = useState(false);
  const [selectedResource, setSelectedResource] = useState({});

  return (
    <div>
      ADMIN PAGE
      {resources.map((resource) => {
        return (
          <button
            key={resource.url}
            onClick={() => {
              setShowResourceFeatures(true);
              setSelectedResource(resource);
            }}
          >
            {resource.title}
          </button>
        );
      })}
      {showResourceFeatures && <ResourceFeatures resource={selectedResource} />}
    </div>
  );
}
