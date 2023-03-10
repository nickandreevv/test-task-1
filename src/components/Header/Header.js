import './header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-wrap">
        <img className="header__logo" src="./logo.svg" alt="welbex logo"></img>
        <div className="header__logo-label">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </div>
      </div>
      <nav className="header__nav nav">
        <a className="nav__link" href="#">
          Услуги
        </a>
        <a className="nav__link" href="#">
          Виджеты
        </a>
        <a className="nav__link" href="#">
          Интеграции
        </a>
        <a className="nav__link" href="#">
          Кейсы
        </a>
        <a className="nav__link" href="#">
          Сертификаты
        </a>
      </nav>
      <div className="header__fone-num">+7 555 555-55-55</div>
      <div className="header__links">
        <a className="header__links-link link" href="#">
          <img src="./telegram.svg" alt="telegram logo" />
        </a>
        <a className="header__links-link link" href="#">
          <img src="./viber.svg" alt="viber logo" />
        </a>
        <a className="header__links-link link" href="#">
          <img src="./whatsapp.svg" alt="whatsapp logo" />
        </a>
      </div>
    </header>
  )
}

export default Header
