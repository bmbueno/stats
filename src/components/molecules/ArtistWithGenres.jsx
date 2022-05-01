import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Genres from "../organisms/Genres";

const ArtistWithGenres = (props) => {
    const [ bio, setBio] = useState('')
    useEffect(() => {
        setBio(props.artist.bio.summary.split("<a")[0])
    }, [props.artist.bio])

    return (
        <>
            { props.artist.genres.length > 0 ? 
                <>
                    <Name> - {props.artist.name}</Name>
                    <Bio> {bio} </Bio>
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

const Bio  = styled.p`
    color: white;
    font-size: 18px;
`;