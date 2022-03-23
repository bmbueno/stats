import { useEffect } from "react"
import { useState } from "react"
import Player  from "../components/organisms/Player"

const getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }

const Home = (props) => {
    const user = props.user

    const [identify, setIdentify] = useState('Login')

    useEffect(() => {
        setIdentify('Logged')
    }, [localStorage.getItem('token')])

    return (
        <div className="App">
            <button> <a target="_blank" href={getRefServer()} >{identify}</a> </button>
            <button onClick={user.currentlyPlaying}>Console log Musica atual</button>
            <Player user={user} />
        </div>
    )
}

export default Home