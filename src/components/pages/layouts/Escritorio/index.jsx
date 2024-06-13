import './styles.modules.scss'
import image from '../../../../assets/gurpo_adv.png'


function Escritorio() {
    return (

        <div className="main">
            <h1>NOSSO ESCRITÓRIO</h1>

            <div className="container_escritorio">
                <div className="escritorio">

                    <div className="backgroud_img">
                        <img className="img" src={image} />
                    </div>

                    <div className="text_escritorio">
                        <p>Lorem ipsum dolor sit amet. Et iste laudantium ut aspernatur dicta et sunt
                            galisum ut nesciunt numquam id obcaecati sunt non recusandae omnis. Vel exercitationem
                            quia est doloremque eveniet ea suscipit minus est dolor repellat a enim ipsa sit ratione
                            blanditiis. Sit omnis suscipit sed maxime fuga eum quos debitis 33 blanditiis nemo ab
                            mollitia dolor. Cum enim repellat et reiciendis inventore et nulla Quis qui eius sapiente ut
                            provident error et alias quam et beatae sapiente.</p>

                        <p>Sed modi ullam non nihil autem est quia fuga est temporibus adipisci At cumque praesentium.
                            Et eligendi dolor ab rerum error a iste eveniet et ipsum corporis ut quae magni. Et beatae labore
                            eum voluptatem quod sed neque voluptatem est tenetur soluta qui doloribus ratione sit omnis esse.
                            Aut pariatur eligendi et assumenda quia eum labore esse ex dicta eligendi aut vero porro sit libero
                            veniam. Sed dolore exercitationem et totam voluptas nam velit molestiae. Et iusto optio et ipsum
                            sapiente rem assumenda nostrum qui unde earum sed ipsa assumenda et sapiente optio. Non earum
                            internos ad similique fugit sit aperiam ducimus.</p>

                    </div>


                </div>

            </div>

            <div className="btn">
                <button onClick={() => window.open('#', '_blank')}>
                    FALE CONOSCO
                </button>
            </div>
        </div>)
}

export default Escritorio