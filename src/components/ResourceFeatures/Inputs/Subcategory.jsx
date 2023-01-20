import useForm from "../../../utils/hooks/useForm";

export default function InputsSubcategory({ isInputDisable, resourceValues }) {
  const { handleChange } = useForm();
  const [inputValues, setInputvalues] = useState({
    name: resourceValues.name,
  });
  return (
    <>
      <label>Nome: </label>
      <input
        type="text"
        id="name"
        value={inputValues.name}
        disabled={isInputDisable}
        onChange={(e) => handleChange(e, inputValues, setInputvalues)}
      />
    </>
  );
}
