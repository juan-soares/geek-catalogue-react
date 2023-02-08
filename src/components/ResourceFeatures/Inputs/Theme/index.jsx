import { useEffect, useState } from "react";
import useForm from "../../../../utils/hooks/useForm";

export default function InputsTheme({
  isDisabled,
  resourceInputValues,
  setResourceInputValues,
}) {
  const { handleChange } = useForm();
  const [showAddDatalist, setShowAddDatalist] = useState(false);
  const [valueToAdd, setValueToAdd] = useState({ title: "" });
  const [valuesList, setValuesList] = useState(
    resourceInputValues?.elements ? resourceInputValues.elements : []
  );

  useEffect(() => {
    setResourceInputValues({ ...resourceInputValues, elements: valuesList });
  }, [valuesList]);

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
      <label>Elementos: </label>
      <ul>
        <button
          disabled={isDisabled}
          type="button"
          onClick={() => setShowAddDatalist(!showAddDatalist)}
        >
          ADICIONAR
        </button>
        {showAddDatalist && (
          <>
            <input
              id="valueToAdd"
              type="text"
              value={valueToAdd.name}
              onChange={(e) => setValueToAdd({ title: e.target.value })}
              disabled={isDisabled}
            />
            <button
              type="button"
              onClick={() => {
                if (valuesList.includes(valueToAdd)) return;
                setValueToAdd({ title: "" });
                setValuesList([...valuesList, valueToAdd]);
              }}
            >
              OK
            </button>
          </>
        )}

        {valuesList.map((value) => {
          return (
            <li key={value.title}>
              {value.title}

              {!isDisabled && (
                <button
                  onClick={() =>
                    setValuesList([
                      ...valuesList.filter((v) => v.title !== value.title),
                    ])
                  }
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
