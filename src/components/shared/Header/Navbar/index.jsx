import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../../utils/hooks/useForm";
import stringToUrl from "../../../../utils/stringToUrl";

export default function HeaderNavbar() {
  const { handleSubmit } = useForm();
  const [list, setList] = useState([]);
  const [submenu, setShowSubmenu] = useState(false);

  useEffect(() => {
    handleSubmit(null, "GET", "category", null, null, setList);
  }, []);

  return (
    <nav>
      <ul>
        {list[0] === "loading" && "Carregando..."}
        {list[0] !== "loading" &&
          list.map((category) => {
            if (category.subcategories.length === 0) {
              return (
                <li key={category._id}>
                  <Link to={`/${stringToUrl(category.name)}`}>
                    {category.name}
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={category._id} onClick={() => setShowSubmenu(!submenu)}>
                  {category.name}
                  {submenu && (
                    <ul>
                      {category.subcategories.map((subcategory) => {
                        return (
                          <li key={subcategory._id}>
                            <Link
                              to={`/${stringToUrl(category.name)}/${stringToUrl(
                                subcategory.name
                              )}`}
                            >
                              {subcategory.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }
          })}
      </ul>
    </nav>
  );
}
