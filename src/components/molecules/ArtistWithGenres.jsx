import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Genres from "../organisms/Genres";

const ArtistWithGenres = (props) => {
    const [ bio, setBio] = useState('')
    const [ bioOpen, setBioOpen ] = useState(false)
    useEffect(() => {
        if (props.artist.bio) {
            setBioOpen(false)
            setBio(props.artist?.bio.summary.split("<a")[0])
        }
    }, [props.artist?.bio])

    const handleClick = () => {
        setBioOpen(!bioOpen)
    }

    return (
        <>
            {  props.artist.genres && props.artist?.genres.length > 0 ? 
                <>
                    <Name> - {props.artist.name} { bio.trim() ? <OpenBio onClick={handleClick} >bio</OpenBio> : ''} </Name>
                    <Collapse open={bioOpen} >
                        <Bio> {bio} </Bio>
                    </Collapse>
                    <Genres list={props.artist?.genres}  />
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
    margin: 0px 0px 20px 0px;
    color: white;
    font-size: 16px;
`;

const OpenBio = styled.a`
    border-radius: 30%;
    margin-left: 10px; 
    padding: 2px 5px;
    background-color: #1DB954;
    color: white;
    font-size: 14px;
    cursor: pointer;
`;

const Collapse = styled.div`
    max-height: ${props => props.open ? "100%" : "0"};
    overflow: hidden;
    transition: all 0.7s ease-out;
`;