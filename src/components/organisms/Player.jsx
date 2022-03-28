import { useState } from 'react'
import styled from 'styled-components'
import Button from '../molecules/Button'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

const Player = (props) => {
    const user = props.user
    const [reproducing, setReproducing] = useState(user.player.reproducing)

    const playPause = () => {
        user.control('playPause')
        setReproducing(user.player.reproducing)
    }
    
    return (
        <Div>
            <Button onClick={() => user.control('previous')}><BiSkipPrevious size={30} /></Button>
            <div style={{width: '10px'}}></div>
            {/* <Button onClick={playPause}>{reproducing ? 'Pause' : 'Play'}</Button> */}
            <Button onClick={() => user.control('next')}><BiSkipNext size={30} /></Button>
        </Div>
    )
}

const Div = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0px;
    width: 100%;
    height: 75px;
    background-color: black;
`

export default Player