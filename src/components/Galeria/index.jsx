import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";


const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const SeccionFluida = styled.section`
  flex-grow: 1;
`;

const ImagenContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ Fotos = [], setTag, fotoSeleccionada, alAlternarFavorito}) => {
  return (
    <>
      <Tag setTag = {setTag}/>
      <GaleriaContainer>
        <SeccionFluida>
          <Titulo>Navegue por la Galeria</Titulo>
          <ImagenContainer>
            {Fotos.map(foto => <Imagen foto={foto} key={foto.id} alSolicitarZoom={fotoSeleccionada} alAlternarFavorito = {alAlternarFavorito} />)}
            {/* // alAlternarFavorito = {alAlternarFavorito} alSolicitarZoom={alSeleccionarFoto} key={foto.id} foto={foto} />) */}
          </ImagenContainer>
        </SeccionFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;


// alSeleccionarFoto,