import styled from "styled-components";
import Genres from "../organisms/Genres";

const ArtistWithGenres = (props) => {
    return (
        <>
            { props.artist.genres.length > 0 ? 
                <>
                    <Name> - {props.artist.name}</Name>
                    <Genres list={props.artist.genres}  />
                </>
                : <></> 
            }
        </>
    )
}

export default ArtistWithGenres

const Name  = styled.h3`
    color: #1DB954;
    font-size: 18px;
`;
