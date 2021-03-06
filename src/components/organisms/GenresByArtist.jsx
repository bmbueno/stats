import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import ArtistWithGenres from "../molecules/ArtistWithGenres"

const GenresByArtist = (props) => {
    const [haveGenre, setHaveGenre] = useState(false)

    useEffect(() => {
        setHaveGenre(false)
        props.list.forEach(artist => {
            if (artist.genres?.length > 0) {
                setHaveGenre(true)
            }
        })
    }, [props.list])

    return (
        <>
            { haveGenre ? 
                <>
                    <h3 style={{color: 'white'}}>Artistas:</h3>
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