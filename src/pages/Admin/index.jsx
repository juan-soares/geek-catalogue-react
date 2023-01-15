import { useState } from "react";
import Header from "../../shared/components/Header";
import AdminResourcesFeatures from "../../components/AdminResourcesFeatures";
import Footer from "../../shared/components/Footer";

export default function AdminPage() {
  const resources = ["Categorias", "Subcategorias"];
  const [selectedResource, setSelectedResource] = useState("");
  const [showAdminResourcesFeatures, setShowAdminResourcesFeatures] =
    useState(false);

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
