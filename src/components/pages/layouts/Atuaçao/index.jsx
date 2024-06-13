import './styles.modules.scss'
import { MdBalance, MdFamilyRestroom, MdOutlineElderly, MdMilitaryTech } from "react-icons/md";
import { FaBriefcase, FaUserShield } from "react-icons/fa";
import { FaHandsHoldingChild, FaHandHoldingDollar } from "react-icons/fa6";




function Atuaçao() {
    return (
        <div className="container_especialidades">

            <div className="title">
                <p>COMO PODEMOS AJUDAR</p>
                <h1>Áreas de atuação</h1>
            </div>

            <div className="especialidades1">

                <div className="card">
                    <div className="icon">
                        <MdBalance />
                    </div>

                    <h3>Cível</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <MdFamilyRestroom />
                    </div>
                    <h3>Família</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaBriefcase />
                    </div>
                    <h3>Trabalhista</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <MdOutlineElderly />
                    </div>
                    <h3>Previdenciário</h3>
                </div>
            </div>

            <div className="especialidades2">
                <div className="card">
                    <div className="def">
                        <div className="icon">
                            <FaUserShield />
                        </div>

                        <h3>Defesa do consumidor</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaHandsHoldingChild />
                    </div>
                    <h3>Orfanológico</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <FaHandHoldingDollar />
                    </div>
                    <h3>Pensionista</h3>
                </div>

                <div className="card">
                    <div className="icon">
                        <MdMilitaryTech />
                    </div>
                    <h3>Militar</h3>
                </div>
            </div>

        </div>
    )
}

export default Atuaçao