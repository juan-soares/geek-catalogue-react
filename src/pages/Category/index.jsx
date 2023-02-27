import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddModal from "../../components/shared/AddModal";
import Chart from "../../components/shared/Chart";

export default function CategoryPage() {
  let { categoryUrl } = useParams();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    async function get() {
      setIsLoading(true);

      const res = await fetch(`${process.env.REACT_APP_API}/category`);
      const { data } = await res.json();
      const categoryInfo = data.filter(
        (category) => category.url === `/${categoryUrl}`
      );
      setCategory(categoryInfo[0]);

      const resList = await fetch(
        `${process.env.REACT_APP_API}/${categoryUrl}`
      );
      const resData = await resList.json();
      setCategoryList(resData.data);

      setIsLoading(false);
    }
    get();
  }, [categoryUrl]);

  if (isLoading) return <div>Carregando...</div>;
  if (!isLoading)
    return (
      <div>
        <b>{category?.translatedTitle}</b>
        <div>
          <button>A-Z</button>
          <button>Lançamento</button>
          <button>Recente</button>
          <button onClick={() => setShowAddModal(true)}>Adicionar</button>
        </div>

        {showAddModal && (
          <AddModal
            category={category}
            setCategoryList={setCategoryList}
            setShowAddModal={setShowAddModal}
          />
        )}

        {categoryList.length === 0 && <p>Sem itens na lista.</p>}

        {categoryList.length > 0 && (
          <div>
            filtro
            {categoryList.map((categoryItem) => (
              <Chart categoryItem={categoryItem} />
            ))}
          </div>
        )}
      </div>
    );
}
