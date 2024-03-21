import React from "react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    name: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  const [cardOpened, setCardOpened] = React.useState(false);

  return (
    <div className="wrapper clear">
      {cardOpened && (
        <Drawer
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

        <div className="d-flex">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => console.log("Нажали Плюс")}
              onFavorite={() => console.log("Добавили в закладки")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
