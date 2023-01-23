import { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../../utils/hooks/useForm";

export default function HeaderGlobalSearch() {
  const { handleChange } = useForm();
  const [searchedValues, setSearchedValues] = useState({});

  return (
    <div>
      <form>
        <input
          type="search"
          id="searchedValue"
          placeholder="Busca"
          value={
            searchedValues.searchedValue ? searchedValues.searchedValue : ""
          }
          onChange={(e) => {
            handleChange(e, searchedValues, setSearchedValues);
          }}
          required
        />
        <button>0-</button>
      </form>

      {/* <ul>
        {searchedValues.inputValue.length > 0 &&
          searchResults.length > 0 &&
          searchResults.map((result) => (
            <li>
              <Link
                key={result._id}
                to={`/${result.category.name
                  .replaceAll(": ", "-")
                  .replaceAll(" ", "-")
                  .toLowerCase()}/${result._id}`}
              >
                <span>{`${result.nameUsa} (${result.releaseDate.slice(
                  0,
                  4
                )})`}</span>
                <span>{result.category.name}</span>

                <img src={result.images[0].url} alt={result.images[0].name} />
              </Link>
            </li>
          ))}
        {searchedValue.inputValue.length > 0 && searchResults.length === 0 && (
          <li>Sem resultados.</li>
        )}
      </ul> */}
    </div>
  );
}
