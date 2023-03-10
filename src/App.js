import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  return (
    <div className="back-wrap">
      <div className="back-wrap__red-ligth"></div>
      <div className="back-wrap__red-ligth_mobile"></div>
      <div className="back-wrap__purple-ligth"></div>
      <div className="back-wrap__purple-ligth_mobile"></div>
      <div className="back-wrap__purple-ball"></div>
      <div className="back-wrap__purple-ball_mobile"></div>
      <div className="back-wrap__red-ball-big"></div>
      <div className="back-wrap__red-ball-small"></div>
      <div className="back-wrap__red-ball-small_mobile"></div>
      <div className="back-wrap__glass_mobile"></div>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
