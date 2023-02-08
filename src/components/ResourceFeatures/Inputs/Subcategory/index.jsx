import useForm from "../../../../utils/hooks/useForm";

export default function InputsCategorySubcategories({
  isDisabled,
  resourceInputValues,
  setResourceInputValues,
}) {
  const { handleChange } = useForm();

  return (
    <>
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
    </>
  );
}
