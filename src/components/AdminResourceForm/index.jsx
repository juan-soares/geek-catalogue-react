import FormCategory from "./category";

export default function AdminResourceForm({ resourceSelected }) {
  return (
    <>
      <h1>Adicionar {resourceSelected}</h1>
      {resourceSelected === "Categorias" && <FormCategory />}
    </>
  );
}
