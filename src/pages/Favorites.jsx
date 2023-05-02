import Card from "../components/Card";
function Favorites({items, onAddToFavorite}) {
    return (
    <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои закладки</h1>
        </div>
      <div className="items d-flex flex-wrap">
      {items
        .map((obj, index) => (
          <Card 
            key={index}
            title={obj.name}
            price={obj.price}
            imgUrl={obj.imgUrl}
            favorited={true}
            onClickFavorite={onAddToFavorite}
          />
        ))}
      </div>
      
    </div>
    );
}

export default Favorites;