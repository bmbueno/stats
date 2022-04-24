import { useEffect } from "react"
import { useState } from "react"
import styled from 'styled-components'
import Button from "../components/molecules/Button"
import Wiki from "../utils/class/Wiki"
import Artist from "../components/molecules/Artist"
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
                { ( media.album ) ? <img width='100%' src={media.album.image.url} ></img> : <></> }
                <Title>{media.name ? media.name : waitTrack}</Title>
                <Artists>{media.artists ? media.artists : waitTrack}</Artists>
                {/* <MediaCharacteristics characteristics={media.characteristics} /> */}
                { (media.genres?.length > 1) ? 
                    <>
                        <hr></hr>
                        <h3 style={{color: '#1DB954'}}>Gêneros da música</h3>
                        <Genres>
                            { media.genres.map((gender, id) => {

                                return <Gender key={id}> {gender.name} </Gender>
                            }) }
                        </Genres>
                    </>
                    : <></> 
                }
                { media.artistsGenres ? 
                    <>
                        <hr></hr>
                        <h3 style={{color: '#1DB954'}}>Gêneros por artista</h3>
                        { media.artistsGenres.map((artist, id) => {
                            return <Artist artist={artist} key={id} />
                        }) }
                    </>
                    : <></> 
                }
            </ContentMusic>
            {/* <Player user={user} /> */}
        </Background>
    )
}

const Title = styled.h1`
    color: white;
    font-size: 25px;
`;

const Gender = styled.div`
    color: white;
    font-size: 20px;

    @media(max-width: 800px) {
        margin-left: 20px;
    }
`;

const Genres = styled.div`
    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
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
    width: fit-content;
    padding: 80px 30px;
    max-width: 800px;
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