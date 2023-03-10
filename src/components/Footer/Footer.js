import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sections">
        <div className="footer__section section">
          <div className="section__name">О Компании</div>
          <div className="section__links">
            <a href="#" className="section__link">
              Партнёрская программа
            </a>
            <a href="#" className="section__link">
              Вакансии
            </a>
          </div>
        </div>
        <div className="footer__section section section_mid">
          <div className="section__name">Меню</div>
          <div className="section__links">
            <div className="section__links-bundle">
              <a href="#" className="section__link">
                Расчёт стоимости
              </a>
              <a href="#" className="section__link">
                Услуги
              </a>
              <a href="#" className="section__link">
                Виджеты
              </a>
              <a href="#" className="section__link">
                Интеграции
              </a>
              <a href="#" className="section__link">
                Наши клиенты
              </a>
            </div>
            <div className="section__links-bundle section__links-bundle_last">
              <a href="#" className="section__link">
                Кейсы
              </a>
              <a href="#" className="section__link">
                Благодарственные письма
              </a>
              <a href="#" className="section__link">
                Сертификаты
              </a>
              <a href="#" className="section__link">
                Блог на Youtube
              </a>
              <a href="#" className="section__link">
                Вопрос / Ответ
              </a>
            </div>
          </div>
        </div>
        <div className="footer__section section">
          <div className="section__name section__name_last">Контакты</div>
          <div className="section__info info">
            <div className="info__number">+7 555 555-55-55</div>
            <div className="info__links">
              <a className="info__links-link link" href="#">
                <img src="./telegram.svg" alt="telegram logo"></img>
              </a>
              <a className="section__links-link link" href="#">
                <img src="./viber.svg" alt="viber logo" />
              </a>
              <a className="section__links-link link" href="#">
                <img src="./whatsapp.svg" alt="whatsapp logo" />
              </a>
            </div>
            <div className="info__adress">
              Москва, Путевой проезд 3с1, к 902
            </div>
          </div>
        </div>
      </div>
      <div className="footer__last">
        <div className="footer__last-logo">
          ©WELBEX 2022. Все права защищены.
        </div>
        <a className="footer__last-link" href="#">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  )
}

export default Footer
