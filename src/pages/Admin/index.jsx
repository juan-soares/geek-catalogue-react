import { useState } from "react";
import ResourceFeatures from "../../components/ResourceFeatures";

export default function AdminPage() {
  const [resourceSelected, setResourceSelected] = useState({
    title: "",
    url: "",
  });
  const resources = [
    { title: "Categorias", url: "category" },
    { title: "Subcategorias", url: "category/subcategory" },
    { title: "Idiomas", url: "category/language" },
    { title: "Qualidades", url: "category/resolution" },
    { title: "Edições", url: "category/edition" },
    { title: "Gêneros", url: "category/genre" },
    { title: "Modalidades", url: "category/modality" },
    { title: "Movimentações", url: "category/movimentation" },
    { title: "Temáticas", url: "theme" },
    { title: "Franquias", url: "franchise" },
  ];

  return (
    <div>
      ADMIN PAGE
      {resources.map((resource) => {
        return (
          <nav key={resource.url}>
            <button
              onClick={() => {
                setResourceSelected(resource);
              }}
            >
              {resource.title}
            </button>
          </nav>
        );
      })}
      {resourceSelected.url !== "" && (
        <ResourceFeatures resourceSelected={resourceSelected} />
      )}
    </div>
  );
}
