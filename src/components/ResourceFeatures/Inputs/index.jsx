import InputsCategory from "./Category";
import InputsCategorySubcategories from "./Subcategory";
import InputsTheme from "./Theme";

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
      {resourceSelected.url !== "category" &&
        resourceSelected.url !== "theme" && (
          <InputsCategorySubcategories
            isDisabled={isDisabled}
            resourceItem={resourceInputValues}
            resourceInputValues={resourceInputValues}
            setResourceInputValues={setResourceInputValues}
          />
        )}
      {resourceSelected.url === "theme" && (
        <InputsTheme
          isDisabled={isDisabled}
          resourceItem={resourceInputValues}
          resourceInputValues={resourceInputValues}
          setResourceInputValues={setResourceInputValues}
        />
      )}
    </>
  );
}
