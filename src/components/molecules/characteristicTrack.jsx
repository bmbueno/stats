import styled from "styled-components";

const CharacteristicTrack = (props) => {
    const Title  = styled.h3`
        color: ${props.color};
        font-size: 18px;
    `;
    
    const Description  = styled.h3`
        color: ${props.color};
        font-size: 16px;
    `;
    return (
        <div> 
            <Title>{props.name} : {props.value} </Title>
        </div>
    )
}



export default CharacteristicTrack