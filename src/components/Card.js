import React from "react"

function Card({id, onClickFavorite, imgUrl, title, price, onClickAdd, favorited}) {
    const [isAdded, setIsAdded] = React.useState();
    const [isLiked, setIsLiked] = React.useState(favorited);

    const handleClickLike = () => {
        onClickFavorite({title, price, imgUrl});
        setIsLiked(!isLiked);
    };
    
    const handleClick = () => {
        onClickAdd({id, title, price, imgUrl});
        setIsAdded(!isAdded);
    };
    return (
        <div className="card">
            <button className="cardButton add-favorite" onClick={handleClickLike}>
                <img src={isLiked ? "heart.svg" : "unliked.svg"} alt="unliked"></img>
            </button>
            <div className="cardImg">
                <img src={imgUrl} alt="sneaker"/>
            </div>
            <div className="cardSneakerName">
                <p>{title}</p>
            </div>
            <div className="cardPayment">
                <p>Цена:</p>
                <span>{price} руб.</span>
                <button className="cardButton add-cart" onClick={handleClick}>
                    <img src={isAdded ? "add-active.svg" : "add.svg"} alt="add"></img>
                </button>
            </div>
      </div>
    )
}

export default Card;