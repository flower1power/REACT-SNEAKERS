function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer p-30">
          <h2 className="mb-30 d-flex justify-between align-center">
            Корзина
            <img
              width={32}
              height={32}
              src="/img/btnRemuve.svg"
              alt="Remuve"
              className="imgRemuve cu-p"
            />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg mr-20"
              ></div>
              <div className="flex">
                <div>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                </div>
                <div className="d-flex align-center justify-between">
                  <b>12 999 rub.</b>
                  <img
                    width={32}
                    height={32}
                    src="/img/btnRemuve.svg"
                    alt="Remuve"
                    className="imgRemuve"
                  />
                </div>
              </div>
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg mr-20"
              ></div>
              <div className="flex">
                <div>
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                </div>
                <div className="d-flex align-center justify-between">
                  <b>12 999 rub.</b>
                  <img
                    width={32}
                    height={32}
                    src="/img/btnRemuve.svg"
                    alt="Remuve"
                    className="imgRemuve"
                  />
                </div>
              </div>
            </div>
            
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButtom">
              Оформить заказ <img src="/img/next.svg" alt="btn add zakaz" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} alt="logo" src="/img/logo2.png" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} alt="card" src="/img/card.svg" />
            <span>1205 rub</span>
          </li>
          <li className="mr-15">
            <img width={18} height={18} alt="like" src="/img/like.svg" />
            <span>Закладки</span>
          </li>
          <li className="mr-15">
            <img width={18} height={18} alt="profile" src="/img/profile.svg" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center ">
            <img width={18} height={18} alt="search" src="/img/search.svg" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unlike.svg" alt="unlike" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 rub.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
