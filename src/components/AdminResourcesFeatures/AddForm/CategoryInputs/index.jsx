export default function AddFormCategoryInputs({
  inputValues,
  setInputValues,
  handleChange,
}) {
  return (
    <>
      <label>Nome: </label>
      <input
        type="text"
        id="name"
        value={inputValues.name ? inputValues.name : ""}
        onChange={(e) => handleChange(e, inputValues, setInputValues)}
        required
      />
    </>
  );
}
