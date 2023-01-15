import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalSearchServices from "../../../services/globalSearch";

export default function HeaderGlobalSearch() {
  const [searchedValue, setSeachedValue] = useState({ inputValue: "" });
  const [searchResults, setSearchResults] = useState([]);
  const { postGlobalSearch } = useGlobalSearchServices();

  function handleSubmit(e) {
    e.preventDefault();
    setSeachedValue({ inputValue: "" });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          list="searchResults"
          placeholder="Busca"
          value={searchedValue.inputValue}
          onChange={async (e) => {
            setSeachedValue({ inputValue: e.target.value });
            const list = await postGlobalSearch({ inputValue: e.target.value });
            setSearchResults(list);
          }}
          required
        />

        <button>0-</button>
      </form>

      <ul>
        {searchedValue.inputValue.length > 0 &&
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
      </ul>
    </div>
  );
}
