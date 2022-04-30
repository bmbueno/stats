import { useEffect } from "react"
import { useState } from "react"
import styled from 'styled-components'
import Button from "../components/molecules/Button"
import Wiki from "../utils/class/Wiki"
import Player from "../components/organisms/Player"
import GenresMusic from "../components/organisms/GenresMusic"
import GenresByArtist from "../components/organisms/GenresByArtist"
// import MediaCharacteristics from "../components/organisms/MusicCharacteristics"

const getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }

const Home = (props) => {
    const user = props.user
    const wiki = new Wiki()
    const [identify, setIdentify] = useState('Login')
    const [media, setMedia] = useState({})
    const waitTrack= 'Aguardando música.'

    let aux = {}
    useEffect(() => {
        setInterval(() => {
            user.currentlyPlaying().then( media => {
                if (media) {
                    if (aux !== media) {
                        setMedia(media)
                        aux = media
                        //console.log(media)
                    }
                } 
            } )

        }, 5000)
        login()
    }, [])

    const login = async () => {
        try {
            const infoUser = await user.getInfoUser();
            setIdentify(infoUser.display_name);
        } catch (e) {
            setIdentify('Login')
        }
    }

    const handleClick = () => {
        wiki.searchGenre('pop')
    }

    return (
        <Background>
            <Login>
                <Button onClick={() => {window.location.href = getRefServer()}} >{identify}</Button>
            </Login>
            <ContentMusic>
                {  media.name ? 
                    <>
                        <Album>
                            { ( media.album ) ? <img width="100%" src={media.album.image.url} ></img> : <></> }
                        </Album>
                        <MusicInfo>
                            <Title>{media.name ? media.name : waitTrack}</Title>
                            <Artists>{media.artists ? media.artists : waitTrack}</Artists>
                            {/* <MediaCharacteristics characteristics={media.characteristics} /> */}
                            <Divider />
                            <GenresMusic list={media.genres} />
                            
                            <GenresByArtist list={media.artistsGenres} />
                        </MusicInfo>
                    </>
                    :
                    <>
                        <Title>{waitTrack}</Title>
                    </>    
                }
            </ContentMusic>
            <Player user={user} />
        </Background>
    )
}

const Divider = styled.hr`
    width: 100%;
`;

const Title = styled.h1`
    color: white;
    font-size: 25px;
`;

const Album = styled.div`
    @media(min-width: 800px) {
        margin: 0px 30px;
        width: 50%;
    }
`;

const MusicInfo = styled.div`
    @media(min-width: 800px) {
        width: 50%;
        margin: 0px 30px;
    }
`;

const Artists = styled.h2`
    color: #1DB954;
    font-size: 22px;
`;

const ContentMusic = styled.div`
    color: white
    font-size: 2vw;
    margin: auto;
    padding: 80px 30px;
    width: fit-content;
    height: 100%;

    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
        max-width: 80%;
 
    }
`;

const Background  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 100%;
    background-color: black;
    min-height: 100vh;
`;

const Login = styled.div`
    position: absolute;
    padding: 20px;
    `;

export default Home