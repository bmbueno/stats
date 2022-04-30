import styled from "styled-components";

const Artist = (props) => {
    return (
        <>
            { props.artist.genres.length > 0 ? 
                <>
                    <Name> - {props.artist.name}</Name>
                        <Genres>
                            { props.artist.genres.map(gender => {
                                return <Gender key={gender.name}>{gender.name}</Gender>
                            })}
                        </Genres>
                </>
                : <></> 
            }
        </>
    )
}

export default Artist

const Name  = styled.h3`
    color: #1DB954;
    font-size: 18px;
`;

const Gender  = styled.li`
    color: white;
    font-size: 18px;
    list-style-type: none;
`;

const Genres = styled.ul`
    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`;