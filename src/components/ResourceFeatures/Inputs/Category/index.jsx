import useForm from "../../../../utils/hooks/useForm";
import CategoryResourceDatalist from "./ResourceDataList";

export default function InputsCategory({
  isDisabled,
  resourceItem,
  resourceInputValues,
  setResourceInputValues,
}) {
  const { handleChange } = useForm();

  const categoryResources = [
    {
      title: "Subcategorias",
      url: "category/subcategory",
      property: "subcategories",
    },
    { title: "Idiomas", url: "category/language", property: "languages" },
    {
      title: "Qualidades",
      url: "category/resolution",
      property: "resolutions",
    },
    { title: "Edições", url: "category/edition", property: "editions" },
    { title: "Gêneros", url: "category/genre", property: "genres" },
    { title: "Modalidades", url: "category/modality", property: "modalities" },
    {
      title: "Movimentações",
      url: "category/movimentation",
      property: "movimentations",
    },
  ];

  return (
    <>
      <div>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          value={resourceInputValues?.name ? resourceInputValues.name : ""}
          disabled
        />
      </div>
      {categoryResources.map((categoryResource) => {
        return (
          <div key={categoryResource.url}>
            <label>{categoryResource.title}</label>
            <CategoryResourceDatalist
              isDisabled={isDisabled}
              categoryResource={categoryResource}
              categoryResourceList={
                resourceInputValues[categoryResource.property]
              }
              resourceInputValues={resourceInputValues}
              setResourceInputValues={setResourceInputValues}
            />
          </div>
        );
      })}
    </>
  );
}
