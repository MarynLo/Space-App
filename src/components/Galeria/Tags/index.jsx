import styled from "styled-components";
import tags from "./tags.json";

const BarraTags = styled.div`
    display: flex;
    align-items: center;
    gap: 64px;
    margin-top: 56px;
`
const TagTitulo = styled.p`
    font-size: 24px;
    color: #D9D9D9;
    margin: 0;
`
const Tag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 2157, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: background-color 0.3s ease;
    border-color: transparent;

    &:hover {
        border-color: #C98CF1;
    }
`
const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`

const Tags = ({setTag}) => {
  return (
    <BarraTags>
      <TagTitulo>Buscas por etiquetas:</TagTitulo>
      <Div>
      {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
      </Div>
    </BarraTags>
  );
  
};

export default Tags;
