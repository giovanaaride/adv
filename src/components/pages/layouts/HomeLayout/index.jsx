import './styles.modules.scss'
import imageHome from '../../../../assets/fundo_home.png'

function HomeLayout() {
  return (
    <div className="container">
      <div className="background">
        
        <div className="background_img">
          <img className="img" src={imageHome} alt="Background" />
        </div>

        <h1><span className='destaque'>Advocacia eficaz </span> com soluções sob medida</h1>

        <p>Traçando o caminho do sucesso com expertise e resultados.</p>
        
        <button onClick={() => window.open('#', '_blank')}>
          FALE CONOSCO
        </button>

      </div>
    </div>
  )
}

export default HomeLayout
