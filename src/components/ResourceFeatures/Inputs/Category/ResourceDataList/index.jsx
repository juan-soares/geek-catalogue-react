import { useState, useEffect } from "react";
import useForm from "../../../../../utils/hooks/useForm";

export default function CategoryResourceDatalist({
  categoryResource,
  isDisabled,
  categoryResourceList,
  resourceInputValues,
  setResourceInputValues,
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
    setResourceInputValues({
      ...resourceInputValues,
      [categoryResource.property]: actualList,
    });
  }, [actualList]);

  useEffect(() => {
    handleSubmit(null, "GET", categoryResource.url, null, null, setOptionList);
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
          disabled={isDisabled}
          onClick={() => {
            if (
              actualList.find((i) => i._id === selectedOption._id) === undefined
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
