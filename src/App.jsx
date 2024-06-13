
import Header from "./components/pages/layouts/Header"
import HomeLayout from "./components/pages/layouts/HomeLayout"
import Escritorio from "./components/pages/layouts/Escritorio"
import Atuaçao from "./components/pages/layouts/Atuaçao"
import Equipe from "./components/pages/layouts/Equipe"
import Contato from "./components/pages/layouts/Contato"
import Mapa from "./components/pages/Mapa"
import Footer from "./components/pages/layouts/Footer"

function App() {
  return (
    <>
      <Header />
      <HomeLayout />
      <Escritorio />
      <Atuaçao />
      <Equipe />
      <Contato />
      
      <div className="mapa">
        <Mapa />
      </div>

      <Footer />

    </>
  )
}

export default App
