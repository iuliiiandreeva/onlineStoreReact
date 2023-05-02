function Drawer({onClickCart, items = [], onRemove}) {
    return (    
    <div className="overlay">
    <div className="drawer">
      <h2 className="mb-20 d-flex justify-between">Корзина   
        <img className="removeBtn cu-p" src="btn-remove.svg" alt="Remove" onClick={onClickCart}></img></h2>
        {
          items.length > 0 ?  <div><div className="drawer-items">
       {items.map((obj) => (        
        <div key={obj.id} className="cartItem d-flex align-center mb-20">
          <div  className="cartItemImg" style={{backgroundImage: `url(${obj.imgUrl})`}}></div>
            <div className="mr-20 flex">
              <p className="mb-5">
                {obj.title}
              </p>
              <b>{obj.price} руб.</b>
            </div>
            <img className="removeBtn" src="btn-remove.svg" alt="Remove" onClick={() => onRemove(obj.id)}></img>
          </div>))}
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li className="d-flex">
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li className="d-flex">
            <span>Налог 5%</span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className="greenBtn">Оформить заказ 
          <img src="arrow.svg" alt="arrow"></img>
        </button>
      </div></div> :        
      (<div className="emptyCart d-flex align-center justify-center flex-column flex">
          <img src="box.png" alt="empty box"></img>
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button className="greenBtn" onClick={onClickCart}>
            <img src="leftArrow.png" alt="arrow"></img>Вернуться назад
          </button>
      </div>)
        }
     
    </div>
  </div>)
}

export default Drawer;