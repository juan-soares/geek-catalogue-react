import { useEffect, useState } from "react";
import useForm from "../../../../utils/hooks/useForm";

export default function InputsFranchise({
  isDisabled,
  resourceInputValues,
  setResourceInputValues,
}) {
  const { handleChange, handleSubmit } = useForm();
  const [optionList, setOptionList] = useState([]);
  const [actualList, setActualList] = useState(
    resourceInputValues?.subfranchises ? resourceInputValues.subfranchises : []
  );
  const [selectedOption, setSelectedOption] = useState({
    _id: "",
    name: "",
    type: "",
    subfranchises: [],
  });

  useEffect(() => {
    setResourceInputValues({
      ...resourceInputValues,
      subfranchises: actualList,
    });
  }, [actualList]);

  useEffect(() => {
    handleSubmit(null, "GET", "franchise", null, null, setOptionList);
  }, []);

  return (
    <>
      <label>Nome: </label>
      <input
        id="name"
        type="text"
        required
        value={resourceInputValues?.name ? resourceInputValues.name : ""}
        onChange={(e) =>
          handleChange(e, resourceInputValues, setResourceInputValues)
        }
        disabled={isDisabled}
      />
      <label>Tipo:</label>
      <select
        required
        disabled={isDisabled}
        id="type"
        value={resourceInputValues?.type ? resourceInputValues.type : ""}
        onChange={(e) =>
          handleChange(e, resourceInputValues, setResourceInputValues)
        }
      >
        <option hidden>Selecione...</option>
        <option value="franquia">Franquia</option>
        <option value="subfranquia">Subfranquia</option>
      </select>

      <label>Subfranquias: </label>
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
            disabled={isDisabled}
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
    </>
  );
}
