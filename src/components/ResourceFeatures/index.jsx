import { useEffect, useState } from "react";
import useForm from "../../utils/hooks/useForm";
import ResourceFeaturesAdd from "./Add";
import ResourceFeaturesList from "./List";

export default function ResourceFeatures({ resourceSelected }) {
  const [resourceList, setResourceList] = useState([]);
  const { handleSubmit } = useForm();

  useEffect(() => {
    async function get() {
      await handleSubmit(
        null,
        "GET",
        resourceSelected.url,
        null,
        null,
        setResourceList
      );
    }
    get();
  }, [resourceSelected]);

  return (
    <section>
      <h1>{resourceSelected.title}</h1>

      {resourceSelected.url !== "category" && (
        <ResourceFeaturesAdd
          resourceSelected={resourceSelected}
          setResourceList={setResourceList}
        />
      )}

      <ResourceFeaturesList
        resourceSelected={resourceSelected}
        resourceList={resourceList}
        setResourceList={setResourceList}
      />
    </section>
  );
}
