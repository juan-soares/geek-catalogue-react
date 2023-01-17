import useForm from "../../../utils/hooks/useForm";

export default function InputsCategory({
  isInputDisable,
  categoryInputsValues,
  setCategoryInputsValues,
}) {
  const { handleChange } = useForm();

  return (
    <>
      <label>Nome: </label>
      <input
        type="text"
        id="name"
        value={categoryInputsValues?.name ? categoryInputsValues.name : ""}
        disabled={isInputDisable}
        onChange={(e) =>
          handleChange(e, categoryInputsValues, setCategoryInputsValues)
        }
      />
    </>
  );
}
