
import './App.css'
import ChooseUs from './component/ChooseUs/ChooseUs'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import Intro from './component/Intro/Intro'
import Services from './component/Services/Services'
import Video from './component/Video/Video'
import WeAre from './component/WeAre/WeAre'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Video />
      <WeAre />
      <Services />
      <ChooseUs />
      <Footer />
    </div>
  )
}

export default App
