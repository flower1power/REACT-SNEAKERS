function Drawer({ onClose, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer p-30">
        <h2 className="mb-30 d-flex justify-between align-center">
          Корзина
          <img
            width={32}
            height={32}
            src="/img/btnRemuve.svg"
            alt="Close"
            className="imgRemuve cu-p"
            onClick={onClose}
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg mr-20"
              ></div>
              <div className="flex">
                <div>
                  <p>{obj.title}</p>
                </div>
                <div className="d-flex align-center justify-between">
                  <b>{obj.price} руб.</b>
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
          ))}
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
