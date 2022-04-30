import styled from "styled-components";

const Genre = (props) => {

    
    return (
        <li key={props.name} onClick={props.onClick} >
            { props.selected == props.name ?
                <NameSelected> { props.name } </NameSelected>
                :   
                <Name>{props.name}</Name>
            }
        </li>
    )
}

const Name  = styled.a`
    color: white;
    font-weight: normal;
    font-size: 18px;
    list-style-type: none;
    cursor: pointer; 
`;

const NameSelected = styled.a`
    color: #1DB954;
    font-weight: bold;
    font-size: 18px;
    list-style-type: none;
    cursor: pointer; 
`;

export default Genre
