import { useEffect } from "react"
import { useState } from "react"
import styled from 'styled-components'
import Button from "../components/molecules/Button"
import Wiki from "../utils/class/Wiki"

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
                { (media.album && window.innerWidth < 500) ? <img width='100%' src={media.album.image.url} ></img> : <></> }
                <Title>{media.name ? media.name : waitTrack}</Title>
                <Artists>{media.artists ? media.artists : waitTrack}</Artists>
                { media.characteristics ? <>
                    <hr></hr>
                    <Characteristics> popularity: {media.characteristics['popularity']} </Characteristics>
                        <Description>A popularidade do artista. O valor estará entre 0 e 100, sendo 100 o mais popular. A popularidade do artista é calculada a partir da popularidade de todas as faixas do artista. </Description>
                    <Characteristics> acousticness: {media.characteristics['acousticness']} </Characteristics>
                        <Description>Uma medida de confiança de 0,0 a 1,0 se a faixa é acústica. 1.0 representa alta confiança de que a faixa é acústica. </Description>
                    <Characteristics> danceability:  {media.characteristics['danceability']} </Characteristics>
                        <Description>A dançabilidade descreve o quão adequada uma faixa é para dançar com base em uma combinação de elementos musicais, incluindo tempo, estabilidade do ritmo, força da batida e regularidade geral. Um valor de 0,0 é o menos dançável e 1,0 é o mais dançável. </Description>
                    <Characteristics> energy:  {media.characteristics['energy']} </Characteristics>
                        <Description>A energia é uma medida de 0,0 a 1,0 e representa uma medida perceptiva de intensidade e atividade. Normalmente, as faixas energéticas parecem rápidas, altas e barulhentas. Por exemplo, o death metal tem alta energia, enquanto um prelúdio de Bach tem uma pontuação baixa na escala. As características perceptivas que contribuem para este atributo incluem faixa dinâmica, intensidade percebida, timbre, taxa de início e entropia geral. </Description>
                    <Characteristics> instrumentalness:  {media.characteristics['instrumentalness']} </Characteristics>
                        <Description>Prevê se uma faixa não contém vocais. Os sons "Ooh" e "aah" são tratados como instrumentais neste contexto. Faixas de rap ou de palavras faladas são claramente "vocais". Quanto mais próximo o valor de instrumentalidade estiver de 1,0, maior a probabilidade de a faixa não conter conteúdo vocal. Valores acima de 0,5 destinam-se a representar faixas instrumentais, mas a confiança é maior à medida que o valor se aproxima de 1,0. </Description>
                    <Characteristics> liveness:  {media.characteristics['liveness']} </Characteristics>
                        <Description>Detecta a presença de uma audiência na gravação. Valores mais altos de vivacidade representam uma probabilidade maior de que a faixa tenha sido executada ao vivo. Um valor acima de 0,8 fornece uma forte probabilidade de que a faixa esteja ativa. </Description>
                    <Characteristics> loudness:  {media.characteristics['loudness']} </Characteristics>
                        <Description>O volume geral de uma faixa em decibéis (dB). Os valores de volume são calculados em média em toda a faixa e são úteis para comparar o volume relativo das faixas. A sonoridade é a qualidade de um som que é o principal correlato psicológico da força física (amplitude). Os valores geralmente variam entre -60 e 0 db. </Description>
                    <Characteristics> speechiness:  {media.characteristics['speechiness']} </Characteristics>
                        <Description>Speechiness detecta a presença de palavras faladas em uma faixa. Quanto mais exclusivamente falada a gravação (por exemplo, talk show, audiolivro, poesia), mais próximo de 1,0 o valor do atributo. Valores acima de 0,66 descrevem faixas que provavelmente são feitas inteiramente de palavras faladas. Valores entre 0,33 e 0,66 descrevem faixas que podem conter música e fala, seja em seções ou em camadas, incluindo casos como música rap. Os valores abaixo de 0,33 provavelmente representam músicas e outras faixas que não são de fala. </Description>
                    <Characteristics> valence:  {media.characteristics['valence']} </Characteristics>
                        <Description>Uma medida de 0,0 a 1,0 que descreve a positividade musical transmitida por uma faixa. Faixas com alta valência soam mais positivas (por exemplo, feliz, alegre, eufórica), enquanto faixas com baixa valência soam mais negativas (por exemplo, triste, deprimida, irritada).  </Description>

                    
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

const Artists = styled.h2`
    color: #1DB954;
    font-size: 22px;
`;

const Characteristics  = styled.h3`
    color: white;
    font-size: 18px;
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

const Description = styled.p`
    color: white;
    font-size: 16px;
    padding-bottom: 20px;
    border-bottom: 2px solid #1DB954;
`;

export default Home