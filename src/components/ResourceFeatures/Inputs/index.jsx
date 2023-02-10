import InputsCategory from "./Category";
import InputsFranchise from "./Franchise";
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
        resourceSelected.url !== "theme" &&
        resourceSelected.url !== "franchise" && (
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
      {resourceSelected.url === "franchise" && (
        <InputsFranchise
          isDisabled={isDisabled}
          resourceItem={resourceInputValues}
          resourceInputValues={resourceInputValues}
          setResourceInputValues={setResourceInputValues}
        />
      )}
    </>
  );
}
