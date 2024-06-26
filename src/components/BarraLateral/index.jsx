import styled from "styled-components"
import ItemNavegacion from "./ItemNavegacion"


const ListaEstilizada = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    width: 236px;
`
const BarraLateral = () => {
    return (
    <aside>
        <nav>
            <ListaEstilizada>
                
                <ItemNavegacion iconoActivo ="iconos/home-activo.png" iconoInactivo = "iconos/home-inactivo.png" activo = {true}>
                    Inicio 
                </ItemNavegacion>

                <ItemNavegacion iconoActivo ="iconos/mas-vistas.png" iconoInactivo = "iconos/mas-vistas-inactivo.png">
                    Más visitas
                </ItemNavegacion>
                
                <ItemNavegacion iconoActivo ="iconos/me-gusta-activo.png" iconoInactivo = "iconos/me-gusta-inactivo.png">
                    Me Gusta
                </ItemNavegacion>

                <ItemNavegacion iconoActivo ="iconos/nuevas.png" iconoInactivo = "iconos/nuevas-inactivo.png">
                    Nuevos
                </ItemNavegacion>

                <ItemNavegacion iconoActivo ="iconos/sorprendeme.png" iconoInactivo = "iconos/sorprendeme-inactivo.png">
                    Sorpréndame
                </ItemNavegacion>
                
            </ListaEstilizada>
        </nav>
    </aside>

    )
}

export default BarraLateral