export const Header = () => {
  return (
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
  );
};
