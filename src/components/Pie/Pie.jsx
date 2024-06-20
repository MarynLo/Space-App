import styled from "styled-components";

const PieEstilizado = styled.footer `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 100px;
    background-color: #04244F;
    padding: 22px;
    box-sizing: border-box;
`

const IconoContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    
    li{
        display: inline-block;
        margin-right: 32px;
    }
`

const PieTexto = styled.p`
    font-size: 16px;
    color: white ;
    margin: 0;
    font-style: oblique;
`

function Pie (){
    return (
        <PieEstilizado >
            <IconoContainer>
                <li>
                    <a href="https://www.facebook.com/">
                        <img src="/public/img/redes/facebook.svg" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/?mx=2">
                        <img src="/public/img/redes/twitter.svg" alt="X" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <img src="/public/img/redes/instagram.svg" alt="Instagram" />
                    </a>
                </li>

            </IconoContainer>
            <PieTexto>Desarrollado por Marisol Negrete</PieTexto>
        </PieEstilizado>
    )

}

export default Pie