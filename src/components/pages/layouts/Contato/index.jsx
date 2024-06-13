import './styles.modules.scss'

function Contato() {
    return (
        <div className="container_contato">
            <div className="contato">

                <h1>FALE COM UM DE NOSSOS ADVOGADOS</h1>

                <p>Clique no botão abaixo e fale conosco.</p>

                <div className="fale_conosco">

                    <button onClick={() => window.open('#', '_blank')}>
                        FALE CONOSCO
                    </button>

                </div>
            </div>
        </div>)
}

export default Contato