import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderNavbar() {
  const [categories, setCategories] = useState([
    { _id: 1, name: "A", subcategories: [{ _id: 2, name: "AAAa" }] },
    { _id: 2, name: "B", subcategories: [] },
  ]);
  const [submenu, setShowSubmenu] = useState(false);


  return (
    <nav>
      <ul>
        {categories.map((category) => {
          if (category.subcategories.length === 0) {
            return (
              <li>
                <Link to={`/${category.name}`}>{category.name}</Link>
              </li>
            );
          } else {
            return (
              <li onClick={() => setShowSubmenu(!submenu)}>
                {category.name}

                {submenu && (
                  <ul>
                    {category.subcategories.map((subcategory) => {
                      return (
                        <li>
                          <Link>{subcategory.name}</Link>
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
