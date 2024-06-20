import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import Fotos from "./fotos.json";
import { useState, useEffect } from "react";
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/ModalZoom/Pie/Pie";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

// contenedor para banner.png
const AppContainer = styled.div`
  width: 1690px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

// seccion de navegue en la galeria
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(Fotos);
// filtrar imagenes por categoria 
  const [filtro, setFiltro] = useState("")
  const [tag, setTag] = useState(0)
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);


  useEffect(() => {
    const fotosFiltradas = Fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosDeGaleria(fotosFiltradas)
  }, [filtro, tag])

  const alAlternarFavorito = (foto) => {

      if(foto.id === fotoSeleccionada?.id) {
        setFotoSeleccionada({
          ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      })
    }

    setFotosDeGaleria(
      fotosDeGaleria.map((fotosDeGaleria) => {
        return {
          ...fotosDeGaleria,
          favorita:
            fotosDeGaleria.id === foto.id
              ? !foto.favorita
              : fotosDeGaleria.favorita,
        };
      })
    );
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtro = {filtro} setFiltro = {setFiltro}/>
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto="La galería más completa del espacio"
                backgroundImage={banner}
              />
              <Galeria
                // alSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
                Fotos={fotosDeGaleria}
                fotoSeleccionada={foto => setFotoSeleccionada(foto)}
                alAlternarFavorito={alAlternarFavorito}
                setTag={setTag}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom
          foto={fotoSeleccionada}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
        <Pie />
      </FondoGradiente>
    </>
  );
};

export default App;