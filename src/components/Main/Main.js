import React from 'react'
import './main.css'

const Main = () => {
  return (
    <main className="main">
      <div className="main__header">
        <div className="main__header_desktop">Зарабатывайте больше</div>
        <span className="main__header_colored">с WELBEX</span>
        <div className="main__header_phone">
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className="main__content">
        <div className="main__content-header">
          <span className="main__content-header_colored">
            <span className="main__content-header_not-colored">Вместе с</span>
            бесплатной
          </span>

          <span className="main__content-header_not-colored">
            {' '}
            <span className="main__content-header_colored">
              {' '}
              консультацией{' '}
            </span>{' '}
            мы дарим:
          </span>
        </div>
        <div className="main__content-variants">
          <div className="main__content-variant variant">
            <div className="variant__name">Виджеты</div>
            <div className="variant__content">30 готовых решений</div>
          </div>
          <div className="main__content-variant variant">
            <div className="variant__name">Skype Аудит</div>
            <div className="variant__content">отдела продаж и CRM системы</div>
          </div>
          <div className="main__content-variant variant">
            <div className="variant__name">Dashboard</div>
            <div className="variant__content">
              с показателями вашего бизнеса
            </div>
          </div>
          <div className="main__content-variant variant">
            <div className="variant__name">35 дней</div>
            <div className="variant__content">использования CRM</div>
          </div>
        </div>
        <div className="main__content-variants_mobails variants">
          <div className="variants__left">
            <div className="variants__name">Skype аудит</div>
            <div className="variants__name">Dashboard</div>
          </div>
          <div className="variants__right">
            <div className="variants__name">30 виджетов</div>
            <div className="variants__name">Месяц аmoCRM</div>
          </div>
        </div>
        <button className="main__content-button">Получить консультацию</button>
      </div>
    </main>
  )
}

export default Main
