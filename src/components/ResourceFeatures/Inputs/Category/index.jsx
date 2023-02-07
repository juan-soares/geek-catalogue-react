import { useEffect, useState } from "react";
import useForm from "../../../../utils/hooks/useForm";

export default function InputsCategory({
  isDisabled,
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

  function CategoryResourceDatalist({
    categoryResource,
    isDisabled,
    categoryResourceList,
  }) {
    const [optionList, setOptionList] = useState([]);
    const [actualList, setActualList] = useState(
      categoryResourceList ? categoryResourceList : []
    );
    const [selectedOption, setSelectedOption] = useState({
      name: "",
      value: "",
    });
    const { handleSubmit } = useForm();

    useEffect(() => {
      handleSubmit(
        null,
        "GET",
        categoryResource.url,
        null,
        null,
        setOptionList
      );
    }, []);
    return (
      <ul>
        <li>
          <select
            disabled={isDisabled}
            onChange={(e) => {
              setSelectedOption(JSON.parse(e.target.value));
            }}
          >
            <option value={selectedOption._id} hidden>
              Selecione...
            </option>
            {optionList.map((option) => {
              return (
                <option key={option._id} value={JSON.stringify(option)}>
                  {option.name}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            onClick={() => {
              if (
                actualList.find((i) => i._id === selectedOption._id) ===
                undefined
              ) {
                setActualList([...actualList, selectedOption]);
              }
            }}
          >
            OK
          </button>
        </li>
        {actualList.map((actualItem) => {
          return (
            <li>
              <label>{actualItem.name}</label>
              {!isDisabled && (
                <button
                  type="button"
                  id={actualItem._id}
                  onClick={(e) => {
                    setActualList(
                      actualList.filter((i) => i._id !== e.target.id)
                    );
                  }}
                >
                  X
                </button>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <>
      <div>
        <label>Nome: </label>
        <input
          id="name"
          type="text"
          value={resourceInputValues?.name ? resourceInputValues.name : ""}
          onChange={(e) =>
            handleChange(e, resourceInputValues, setResourceInputValues)
          }
          disabled={isDisabled}
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
            />
          </div>
        );
      })}
    </>
  );
}
