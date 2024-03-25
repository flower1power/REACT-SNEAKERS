import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);

  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://65fc008d14650eb2100b42d0.mockapi.io/items")
      .then((respons) => {
        return respons.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCard = (obj) => {
    setCardItems(prev => [...prev, obj]);
  };

  console.log(cardItems);

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
          items={cardItems}
          onClose={() => {
            setCardOpened(false);
          }}
        />
      )}

      <Header
        onClickCard={() => {
          setCardOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center ">
            <img width={18} height={18} alt="search" src="/img/search.svg" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
              onFavorite={() => console.log("Добавили в закладки")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
