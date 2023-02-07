import logo from "./logo.svg";
import "./App.scss";
import Card from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {
  return (
    <div className="App">
      <Drawer />
      <Header />
      <div className="content">
        <div className="cards">
          <div className="cards_under">
            <div className="row">
              <div className="cards__title">все кроссовки</div>
              <div className="cards__search row">
                <img src="img/search.svg" />
                <input className="cards__input" placeholder="search" />
              </div>
            </div>
          </div>
          <div className="cards__body">
            <div className="row">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
