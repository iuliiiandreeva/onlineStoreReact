import Card from '../components/Card';

function Home( {
    items,
    searchValue, 
    setSearchValue,
    onAddToFavorite,
    inChangeSearch,
    onAddToCart
}) {
    return (
    <div className="content p-40">
    <div className="d-flex align-center mb-40 justify-between">
      <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
        <div className="search-block">
            <img src="search.svg" alt="Search"/>
            <input onChange={inChangeSearch} value={searchValue} placeholder="Поиск..."></input>
            {searchValue && <img onClick={() => setSearchValue("")} className="clear removeBtn cu-p" src="btn-remove.svg" alt="Clear"></img>}
            </div>
        </div>
      <div className="items d-flex flex-wrap">
        {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj, index) => (
          <Card 
            key={index}
            title={obj.name}
            price={obj.price}
            imgUrl={obj.imgUrl}
            onClickAdd = {(obj) => onAddToCart(obj)}
            onClickFavorite = {(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
      
    </div>
    );
}

export default Home;