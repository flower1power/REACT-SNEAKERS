function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
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
  );
}

export { Drawer };
