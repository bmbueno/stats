import styled from "styled-components";

const Genre = (props) => {

    
    return (
        <li key={props.name} onClick={props.onClick} >
            <Name>{props.name}</Name>
        </li>
    )
}

const Name  = styled.a`
    color:  white ;
    font-weight: normal;
    font-size: 18px;
    list-style-type: none;
    cursor: pointer; 
`;
export default Genre
