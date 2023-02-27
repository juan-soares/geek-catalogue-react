export default function Chart({ categoryItem }) {
  return (
    //referencia: https://animesgames.net/
    <div>
      //borda superior lateral direita
      <span>{categoryItem.category.name}</span>
      //centro das bordas laterais
      <img
        src={categoryItem.imagens[0].url}
        alt={categoryItem.imagens[0].title}
      />
      //borda superior lateral direita
      <div>
        <span>{categoryItem.aquired}</span>
        <span>{categoryItem.finished}</span>
        <span>{categoryItem.language.name}</span>
        <span>{categoryItem.subcategory.name}</span>
        <span>
          {categoryItem.players[0]}-
          {categoryItem.players[categoryItem.players.length]}
        </span>
        <span>{categoryItem.mode.name}</span>
        <span>{categoryItem.theme.name}</span>
      </div>
      //borda inferior
      <label>
        {categoryItem.originalTitle} ({categoryItem.releaseDate.slice(0, 4)})
      </label>
      <label>{categoryItem.translatedTitle}</label>
      //hover
      <div>
        <p>{categoryItem.synopses}</p>
      </div>
    </div>
  );
}
