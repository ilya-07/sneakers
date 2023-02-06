import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logotype">
              <div className="row">
                <div className="header__logo-img">
                  <img src="img/logo.png" />
                </div>
                <div className="header__logo-text">
                  <h2 className="header__undertitle">subtitle</h2>
                  <p className="header__desc">logo text</p>
                </div>
              </div>
            </div>
            <div className="additions">
              <ul className="row">
                <li className="additions__price">
                  <img src="img/cart.svg" />
                  <span>1000$</span>
                </li>
                <li>
                  <img src="img/heart.svg" />
                </li>
                <li>
                  <img src="img/user.svg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="cards">
          <h1 className="cards__title">все кроссовки</h1>
          <div className="cards__body">
            <div className="row">
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/1.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/2.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/3.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/4.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/5.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/6.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/7.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
              <div className="cards__card">
                <div className="cards__like">
                  <img src="img/liked.svg" />
                </div>
                <div className="cards__img">
                  <img src="img/sneakers/8.jpg" />
                </div>
                <p className="cards__desc">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
