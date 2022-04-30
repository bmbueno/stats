import styled from "styled-components"
import ArtistWithGenres from "../molecules/ArtistWithGenres"

const GenresByArtist = (props) => {

    return (
        <>
            { props.list ? 
                <>
                    <h3 style={{color: '#1DB954'}}>Gêneros por artista</h3>
                    { props.list.map((artist, id) => {
                        return <ArtistWithGenres artist={artist} key={id} />
                    }) }
                </>
                : <></> 
            }
        </>
    )
}

export default GenresByArtist

const Divider = styled.hr`
    width: 100%;
`;