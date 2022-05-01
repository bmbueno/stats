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
    const [identify, setIdentify] = useState('')
    const [media, setMedia] = useState({})
    const waitTrack= 'Aguardando música.'

    let aux = {}
    useEffect(() => {
        setInterval(() => {
            user.currentlyPlaying().then( media => {
                if (media) {
                    if (aux.name !== media.name) {
                        setMedia(media)
                        aux = media
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
            setIdentify('')
        }
    }

    return (
        <Background>
            <Login>
                <Welcome logged={identify}>Bem-vindo, {identify} !</Welcome>
                <Button onClick={() => {window.location.href = getRefServer()}} >{identify ? 'Sair' : 'Faça login aqui'}</Button>
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
                    <Await>
                        <Title>{waitTrack}</Title>
                        <h3 style={{'color': '#1DB954'}} >Faça login e reproduza uma música em algum dispositivo conectado a sua conta Spotify.</h3>
                    </Await>    
                }
            </ContentMusic>
            <Player user={user} />
        </Background>
    )
}

const Divider = styled.hr`
    width: 100%;
`;

const Await = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
    font-size: 25px;
`;

const Welcome = styled.span`
    display: ${props => props.logged ? "block" : "none"};
    color: white;
    font-size: 20px;
    margin-right: 20px;
`;

const Album = styled.div`
    @media(min-width: 800px) {
        max-width: 30vw;
        margin: 0px 30px;
        width: 50vw;
    }
`;

const MusicInfo = styled.div`
    @media(min-width: 800px) {
        padding-bottom: 50px;
        max-width: 40vw;
        margin: 0px 30px;
        width: 50vw;
    }
`;

const Artists = styled.h2`
    color: #1DB954;
    font-size: 22px;
`;

const ContentMusic = styled.div`
    color: white;
    margin: auto;
    padding: 120px 30px;
    width: fit-content;
    height: 100%;

    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
        max-width: 80%;
        padding: 80px 30px;
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
    display: flex;
    align-items: center;
    position: absolute;
    padding: 20px;
    `;

export default Home