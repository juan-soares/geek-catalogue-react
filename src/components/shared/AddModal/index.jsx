import { useState } from "react";

export default function AddModal({
  category,
  setCategoryList,
  setShowAddModal,
}) {
  const [newItem, setNewItem] = useState({});

  function handleChange(e) {
    setNewItem({
      ...newItem,
      [e.target.id]: e.target.value,
    });
    console.log(newItem);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const confirm = window.confirm("Deseja salvar?");
    if (!confirm) return;

    window.alert("Salvo!");
    setShowAddModal(false);
  }
  return (
    <div>
      Adicionar {category.translatedTitle}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="originalTitle">Titulo Original</label>
        <input
          id="originalTitle"
          type="text"
          required
          value={newItem.originalTitle ? newItem.originalTitle : ""}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="translatedTitle">Titulo Traduzido</label>
        <input
          id="translatedTitle"
          type="text"
          value={newItem.translatedTitle ? newItem.translatedTitle : ""}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="releaseDate">Data de Lançamento</label>
        <input
          id="releaseDate"
          type="date"
          required
          value={newItem.releaseDate ? newItem.releaseDate : ""}
          onChange={(e) => handleChange(e)}
        />

        <label htmlFor="subcategory">Subcategoria</label>
        <select
          id="subcategory"
          required
          value={newItem.subcategory ? newItem.subcategory : ""}
          onChange={(e) => handleChange(e)}
        >
          <option hidden>Selecione...</option>
        </select>

        <label htmlFor="synopses">Sinopse</label>
        <textarea
          id="synopses"
          required
          value={newItem.synopses ? newItem.synopses : ""}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <label htmlFor="language">Idioma</label>
        <select
          id="language"
          required
          value={newItem.language ? newItem.language : ""}
          onChange={(e) => handleChange(e)}
        >
          <option hidden>Selecione...</option>
        </select>

        <label>Players</label>
        <label htmlFor="playersMin">Min</label>
        <input
          id="playersMin"
          type="number"
          min="1"
          required
          value={newItem.playersMin ? newItem.playersMin : ""}
          onChange={(e) => {
            if (
              Number(newItem.playersMax) < Number(e.target.value) &&
              e.target.value !== ""
            ) {
              window.alert(
                `O número deve ser igual ou menor que ${newItem.playersMax}.`
              );
              return;
            }
            handleChange(e);
          }}
        />
        <label htmlFor="playersMax">Max</label>
        <input
          id="playersMax"
          type="number"
          min="1"
          required
          value={newItem.playersMax ? newItem.playersMax : ""}
          onChange={(e) => {
            if (
              Number(newItem.playersMin) > Number(e.target.value) &&
              e.target.value !== ""
            ) {
              window.alert(
                `O número deve ser igual ou maior que ${newItem.playersMin}.`
              );
              return;
            }
            handleChange(e);
          }}
        />

        <label htmlFor="mode">Modo</label>
        <select
          id="mode"
          required
          value={newItem.mode ? newItem.mode : ""}
          onChange={(e) => handleChange(e)}
        >
          <option hidden>Selecione...</option>
        </select>

        <label htmlFor="theme">Tema</label>
        <select
          id="theme"
          required
          value={newItem.theme ? newItem.theme : ""}
          onChange={(e) => handleChange(e)}
        >
          <option hidden>Selecione...</option>
        </select>

        <label htmlFor="aquired">Adquirido</label>
        <select
          id="aquired"
          value={newItem.aquired ? newItem.aquired : false}
          onChange={(e) => handleChange(e)}
        >
          <option value={true}>SIM</option>
          <option value={false}>NAO</option>
        </select>

        <label htmlFor="finished">Finalizado</label>
        <select
          id="finished"
          value={newItem.finished ? newItem.finished : false}
          onChange={(e) => handleChange(e)}
        >
          <option value={true}>SIM</option>
          <option value={false}>NAO</option>
        </select>

        <label htmlFor="images">Imagens</label>
        <input id="images" type="file" multiple required />

        <button>Salvar</button>
      </form>
    </div>
  );
}
