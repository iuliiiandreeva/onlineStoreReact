import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route, Routes } from "react-router-dom";
import React from "react";
import axios from "axios";
import Home from './pages/Home'
import Favorites from "./pages/Favorites";


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);


  React.useEffect(() => {
    axios.get("https://64482aca7bb84f5a3e541cfc.mockapi.io/items")
    .then((res => setItems(res.data)));
    axios.get("https://64482aca7bb84f5a3e541cfc.mockapi.io/cart")
    .then((res => setCartItems(res.data)));},
     []);
  
  
  const onAddToCart = (obj) => {
    if ((cartItems.find(item => Number(item.id) === Number(obj.id)))) {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id))); // spread operator
    } else {
      axios.post("https://64482aca7bb84f5a3e541cfc.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://64482aca7bb84f5a3e541cfc.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id!== id));
  };
  
  const inChangeSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://64482aca7bb84f5a3e541cfc.mockapi.io/cart", obj);
    if (!(favorites.find(item => item.title === obj.title && item.price === obj.price && item.imgUrl === obj.imgUrl))) {
      setFavorites(prev => [...prev, obj]); // spread operator
    }
  };

  return (
    <div className="wrapper clear">
    {cartOpened && <Drawer items = {cartItems} onClickCart = {() => setCartOpened(!cartOpened)} onRemove = {onRemoveFromCart} />}
    <Header onClickCart = {() => setCartOpened(!cartOpened)} />
    <Routes>
      <Route path="/" exact 
      element={<Home 
        searchValue = {searchValue}
        items = {items}
        onAddToCart = {onAddToCart}
        onAddToFavorite = {onAddToFavorite}
        inChangeSearch = {inChangeSearch}
        setSearchValue = {setSearchValue}
      />}></Route>
      
      <Route path="/favorites" exact 
      element={
      <Favorites 
      items = {cartItems}
      onAddToFavorite = {onAddToFavorite}
      />}></Route>
    </Routes>
    </div>
  );
}

export default App;
