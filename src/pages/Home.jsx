import { useEffect } from "react"
import { useState } from "react"
import styled from 'styled-components'
import Player  from "../components/organisms/Player"
import Button from "../components/molecules/Button"

const getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }

const Home = (props) => {
    const user = props.user
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

    }, [])

    

    return (
        <Background>
            <Login>
                <Button onClick={() => {window.location.href = getRefServer()}} >{identify}</Button>
            </Login>
            <ContentMusic>
                <Title>{media.name ? media.name : waitTrack}</Title>
                <Artists>{media.artists ? media.artists : waitTrack}</Artists>
            </ContentMusic>
            <Player user={user} />
        </Background>
    )
}

const Title = styled.h1`
    color: white;
    font-size: 3vh;
`;

const Artists = styled.h2`
    color: white;
    font-size: 2vh;
`;

const ContentMusic = styled.div`
    font-size: 2vw;
    margin: auto;
    width: fit-content;
    padding: 30px;
`;

const Background  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 100vh;
    background-color: black;
`;

const Login = styled.div`
    position: absolute;
    padding: 20px;
`;

export default Home