import PaletaLista from "components/PaletaLista/PaletaLista";
import './Home.css';
import Navbar from 'components/Navbar/Navbar';
import Carrossel from 'components/Carrossel/Carrossel';



function Home() {
    return <div className="Home">
                <Navbar/>
                <Carrossel/>
                <div className="Home__container">
                    <PaletaLista/>
                </div>
            </div>;
  };
  
  export default Home;