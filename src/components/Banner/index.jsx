import styled from "styled-components"


const FiguraEstilizado = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-width: 100%;
    min-height: 328px;
    margin: 0;
    border-radius: 20px; 
    background-size: cover;
`
const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;    
`

const Banner = ({ texto, backgroundImage}) => {
    return (
        <FiguraEstilizado $backgroundImage={backgroundImage}>
            <TituloEstilizado>{texto}</TituloEstilizado>
        </FiguraEstilizado>
    )
}



export default Banner