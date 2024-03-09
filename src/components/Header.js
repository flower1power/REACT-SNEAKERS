function Header() {
  return (
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
  );
}

export { Header };
