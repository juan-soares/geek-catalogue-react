import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderGlobalSearch() {
  const [searchedValue, setSeachedValue] = useState({ inputValue: "" });
  const [searchResults, setSearchResults] = useState([]);
  const lista = [{ nameUsa: "aaa", category: "jogos", _id: "333333" }];

  useEffect(() => {
    async function getList() {
      const res = await fetch(`${process.env.REACT_APP_API}/search`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchedValue),
      });
      const { data } = await res.json();
      setSearchResults(data);
    }
    getList();
  }, [searchedValue]);

  function handleSubmit(e) {
    e.preventDefault();
    setSeachedValue("");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          list="searchResults"
          placeholder="Busca"
          value={searchedValue.inputValue}
          onChange={(e) => setSeachedValue({ inputValue: e.target.value })}
          required
        />

        <button>0-</button>
      </form>
      {searchedValue.inputValue.length > 0 &&
        searchResults.map((result) => (
          <Link
            key={result._id}
            to={`/${result.category.name
              .replaceAll(": ", "-")
              .replaceAll(" ", "-")
              .toLowerCase()}/${result._id}`}
          >
            <option>
              {`${result.nameUsa} (${result.releaseDate.slice(0, 4)})`}
            </option>
            <img src={result.images[0].url} alt={result.images[0].name} />
          </Link>
        ))}
      {searchedValue.inputValue.length > 0 && searchResults.length === 0 && (
        <option>Sem resultados.</option>
      )}
    </div>
  );
}
