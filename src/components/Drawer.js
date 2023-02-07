export const Drawer = () => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__title row">
          <h2>Корзина</h2>
          <img src="img/btn-remove.svg" />
        </div>
        <div className="cart">
          <div className="cart__tiem">
            <div className="row">
              <div className="cart__img">
                <img src="img/sneakers/2.jpg" />
              </div>
              <div className="cart__desc">
                <div className="cart__text">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                </div>
                <div className="cart__price">12 999 руб.</div>
              </div>
              <div className="cart__add-close">
                <img src="img/btn-remove.svg" />
              </div>
            </div>
          </div>
          <div className="cart__tiem">
            <div className="row">
              <div className="cart__img">
                <img src="img/sneakers/1.jpg" />
              </div>
              <div className="cart__desc">
                <div className="cart__text">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                </div>
                <div className="cart__price">12 999 руб.</div>
              </div>
              <div className="cart__add-close">
                <img src="img/btn-remove.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="drawer__footer">
          <ul className="drawer__list">
            <li className="row">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="row">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
            <li></li>
          </ul>
          <button className="drawer__btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
