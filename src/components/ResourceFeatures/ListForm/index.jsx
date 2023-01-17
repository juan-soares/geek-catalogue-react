import { useState } from "react";
import InputsCategory from "../Inputs/Category";

export default function ResourceFeaturesListForm({ resource }) {
  const [isInputDisable, setIsInputDisable] = useState(true);

  return (
    <ul>
      <li>
        <form>
          {resource.url === "category" && (
            <InputsCategory isInputDisable={isInputDisable} />
          )}

          {!isInputDisable && (
            <button onClick={() => setIsInputDisable(true)}>OK</button>
          )}
        </form>

        {isInputDisable && (
          <button onClick={() => setIsInputDisable(false)}>ALT</button>
        )}
        <button>DEL</button>
      </li>
    </ul>
  );
}
