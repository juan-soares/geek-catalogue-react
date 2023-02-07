import ListLi from "./Li";

export default function ResourceFeaturesList({
  resourceSelected,
  resourceList,
  setResourceList,
}) {
  return (
    <ul>
      {resourceList[0] === "loading" && <label>Carregando...</label>}
      {resourceList[0] !== "loading" &&
        resourceList.map((resourceItem) => (
          <ListLi
            resourceItem={resourceItem}
            resourceSelected={resourceSelected}
            setResourceList={setResourceList}
            key={resourceItem._id}
          />
        ))}
    </ul>
  );
}
