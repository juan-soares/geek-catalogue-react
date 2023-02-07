import InputsCategory from "./Category";
import InputsCategorySubcategories from "./Category/Subcategory";

export default function ResourceFeaturesInputs({
  resourceSelected,
  isDisabled,
  resourceInputValues,
  setResourceInputValues,
}) {
  return (
    <>
      {resourceSelected.url === "category" && (
        <InputsCategory
          isDisabled={isDisabled}
          resourceItem={resourceInputValues}
          resourceInputValues={resourceInputValues}
          setResourceInputValues={setResourceInputValues}
        />
      )}
      {resourceSelected.url !== "category" && (
        <InputsCategorySubcategories
          isDisabled={isDisabled}
          resourceItem={resourceInputValues}
          resourceInputValues={resourceInputValues}
          setResourceInputValues={setResourceInputValues}
        />
      )}
    </>
  );
}
