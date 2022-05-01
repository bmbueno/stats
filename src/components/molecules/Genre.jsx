import { useEffect } from "react";
import styled from "styled-components";

const Genre = (props) => {

    useEffect(() => {
        console.log(props.selected)
    }, [props.selected])
    return (
        <Item selected={props.selected == props.name} key={props.name} onClick={props.onClick} >
            { props.selected == props.name ?
                <NameSelected> { props.name } </NameSelected>
                :   
                <Name>{props.name}</Name>
            }
        </Item>
    )
}

const Item = styled.li`
    display: block;
    padding: 10px 20px;
    border-radius: 10px 10px ${props => props.selected ? '0px 0px' : '10px 10px'};
    background-color: ${props => props.selected ? '#1DB954' : "black"};
    border: 2px solid #1DB954;
    border-bottom: ${props => props.selected ? 'none' : "2px solid #1DB954"};
    width: auto;
    cursor: pointer;

    &:hover {
        background-color: #1DB954;
        transition: all 0.3s ease-out;
    };
`;

const Name  = styled.a`
    color: white;
    font-weight: normal;
    font-size: 18px;
    list-style-type: none;
`;

const NameSelected = styled.a`
    color: white;
    font-weight: bold;
    font-size: 18px;
    list-style-type: none;
`;

export default Genre
