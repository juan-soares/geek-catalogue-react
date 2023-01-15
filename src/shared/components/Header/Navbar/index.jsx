import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCategoryServices from "../../../services/category";
import stringToUrl from "../../../utils/stringToUrl";

export default function HeaderNavbar() {
  const [categories, setCategories] = useState([]);
  const [submenu, setShowSubmenu] = useState(false);
  const { getCategory } = useCategoryServices();

  useEffect(() => {
    async function getList() {
      const list = await getCategory();
      setCategories(list);
    }
    getList();
  }, []);

  return (
    <nav>
      <ul>
        {categories.map((category) => {
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
