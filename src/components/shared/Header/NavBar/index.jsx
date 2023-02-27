import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function get() {
      const res = await fetch(`${process.env.REACT_APP_API}/category`);
      const { data } = await res.json();
      setCategoriesList(data);
      setIsLoading(false);
    }
    get();
  }, []);

  return (
    <nav>
      <ul>
        {isLoading && <span>Carregando...</span>}
        {categoriesList.map((category) => {
          return (
            <li key={category._id}>
              <Link to={category.url}>{category.translatedTitle}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
