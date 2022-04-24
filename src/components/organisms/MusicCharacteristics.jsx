import styled from 'styled-components'

const MediaCharacteristics = (props) => {
    const characteristics = props.characteristics
    if (characteristics) {
        return (
            <>
                <Characteristics> popularity: {characteristics['popularity']} </Characteristics>
                    <Description>A popularidade do artista. O valor estará entre 0 e 100, sendo 100 o mais popular. A popularidade do artista é calculada a partir da popularidade de todas as faixas do artista. </Description>
                <Characteristics> acousticness: {characteristics['acousticness']} </Characteristics>
                    <Description>Uma medida de confiança de 0,0 a 1,0 se a faixa é acústica. 1.0 representa alta confiança de que a faixa é acústica. </Description>
                <Characteristics> danceability:  {characteristics['danceability']} </Characteristics>
                    <Description>A dançabilidade descreve o quão adequada uma faixa é para dançar com base em uma combinação de elementos musicais, incluindo tempo, estabilidade do ritmo, força da batida e regularidade geral. Um valor de 0,0 é o menos dançável e 1,0 é o mais dançável. </Description>
                <Characteristics> energy:  {characteristics['energy']} </Characteristics>
                    <Description>A energia é uma medida de 0,0 a 1,0 e representa uma medida perceptiva de intensidade e atividade. Normalmente, as faixas energéticas parecem rápidas, altas e barulhentas. Por exemplo, o death metal tem alta energia, enquanto um prelúdio de Bach tem uma pontuação baixa na escala. As características perceptivas que contribuem para este atributo incluem faixa dinâmica, intensidade percebida, timbre, taxa de início e entropia geral. </Description>
                <Characteristics> instrumentalness:  {characteristics['instrumentalness']} </Characteristics>
                    <Description>Prevê se uma faixa não contém vocais. Os sons "Ooh" e "aah" são tratados como instrumentais neste contexto. Faixas de rap ou de palavras faladas são claramente "vocais". Quanto mais próximo o valor de instrumentalidade estiver de 1,0, maior a probabilidade de a faixa não conter conteúdo vocal. Valores acima de 0,5 destinam-se a representar faixas instrumentais, mas a confiança é maior à medida que o valor se aproxima de 1,0. </Description>
                <Characteristics> liveness:  {characteristics['liveness']} </Characteristics>
                    <Description>Detecta a presença de uma audiência na gravação. Valores mais altos de vivacidade representam uma probabilidade maior de que a faixa tenha sido executada ao vivo. Um valor acima de 0,8 fornece uma forte probabilidade de que a faixa esteja ativa. </Description>
                <Characteristics> loudness:  {characteristics['loudness']} </Characteristics>
                    <Description>O volume geral de uma faixa em decibéis (dB). Os valores de volume são calculados em média em toda a faixa e são úteis para comparar o volume relativo das faixas. A sonoridade é a qualidade de um som que é o principal correlato psicológico da força física (amplitude). Os valores geralmente variam entre -60 e 0 db. </Description>
                <Characteristics> speechiness:  {characteristics['speechiness']} </Characteristics>
                    <Description>Speechiness detecta a presença de palavras faladas em uma faixa. Quanto mais exclusivamente falada a gravação (por exemplo, talk show, audiolivro, poesia), mais próximo de 1,0 o valor do atributo. Valores acima de 0,66 descrevem faixas que provavelmente são feitas inteiramente de palavras faladas. Valores entre 0,33 e 0,66 descrevem faixas que podem conter música e fala, seja em seções ou em camadas, incluindo casos como música rap. Os valores abaixo de 0,33 provavelmente representam músicas e outras faixas que não são de fala. </Description>
                <Characteristics> valence:  {characteristics['valence']} </Characteristics>
                    <Description>Uma medida de 0,0 a 1,0 que descreve a positividade musical transmitida por uma faixa. Faixas com alta valência soam mais positivas (por exemplo, feliz, alegre, eufórica), enquanto faixas com baixa valência soam mais negativas (por exemplo, triste, deprimida, irritada).  </Description>
            </>)
    }
    else 
        return <></>
}

export default MediaCharacteristics


const Characteristics  = styled.h3`
    color: white;
    font-size: 18px;
`;

const Description = styled.p`
    color: white;
    font-size: 16px;
    padding-bottom: 20px;
    border-bottom: 2px solid #1DB954;
`;