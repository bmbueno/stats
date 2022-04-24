import styled from "styled-components";

const Artist = (props) => {
    return (
        <>
            <Name>{props.artist.name}</Name>
            <ul>
                { props.artist.genres.map(gender => {
                    return <Gender key={gender}>{gender}</Gender>
                })}
            </ul>
        </>
    )
}

export default Artist

const Name  = styled.h3`
    color: #1DB954;
    font-size: 20px;
`;

const Gender  = styled.li`
    color: white;
    font-size: 18px;
    list-style-type: none;
`;