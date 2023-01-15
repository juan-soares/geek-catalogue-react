import { useState } from "react";
import Header from "../../shared/components/Header";
import Footer from "../../shared/components/Footer";
import AdminResourceForm from "../../components/AdminResourceForm";

export default function AdminPage() {
  const resources = ["Categorias", "Subcategorias"];
  const [showForm, setShowForm] = useState(false);
  const [resourceSelected, setResourceSelected] = useState("");

  return (
    <div>
      <Header />
      <div>
        Admin Page
        {resources.map((resource) => {
          return (
            <button
              key={resource}
              onClick={() => {
                setShowForm(true);
                setResourceSelected(resource);
              }}
            >
              Adicionar {resource}
            </button>
          );
        })}
        {showForm && <AdminResourceForm resourceSelected={resourceSelected} />}
      </div>
      <Footer />
    </div>
  );
}
