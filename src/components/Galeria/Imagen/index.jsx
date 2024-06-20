import {styled} from "styled-components"
import BotonIcono from "../../BotonIcono"


const Figure = styled.figure`
    width: ${props => props.$expandida ? "90%" : "460px"};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;

        h3{
            font-family: "GandhiSansBold";
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Imagen = ({foto, expandida = false, alSolicitarZoom, alAlternarFavorito}) => {

// const iconoFavorito = foto.favorita ? "/public/iconos/favorito-activo.png" : "/public/iconos/favorito.png"

let iconoFavorito = "/public/iconos/favorito.png"
if (foto.favorita) {
    iconoFavorito = "/public/iconos/favorito-activo.png"
}

    return (
         <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Pie>
                <h4>{foto.fuente}</h4>
                <BotonIcono onClick={() => alAlternarFavorito(foto)}>
                    <img src={iconoFavorito} alt="Icono de favoritos" />
                </BotonIcono>
                {!expandida && <BotonIcono aria-hidden={expandida} onClick = {() => alSolicitarZoom(foto)}>
                    <img src="/public/iconos/expandir.png" alt="Icono de expandir" />
                </BotonIcono>}  
            </Pie>
        </figcaption>
    </Figure>
    )
}

export default Imagen