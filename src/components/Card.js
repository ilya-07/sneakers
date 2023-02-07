const Card = () => {
  return (
    <div className="cards__card">
      <div className="cards__like">
        <img src="img/liked.svg" />
      </div>
      <div className="cards__img">
        <img src="img/sneakers/3.jpg" />
      </div>
      <p className="cards__desc">Мужские Кроссовки Nike Blazer Mid Suede</p>
      <div className="cards__price price">
        <div className="row">
          <div className="price__text">
            <div className="price__desc">Цена:</div>
            <div className="price__count">12 999 руб.</div>
          </div>
          <button className="price__add">
            <img src="img/btn-plus.svg" />
          </button>
          {/* <div className="price__add">+</div> */}
        </div>
      </div>
    </div>
  );
};
export default Card;
