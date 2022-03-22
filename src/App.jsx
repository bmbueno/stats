import React from 'react';
import User from './utils/class/User'

const getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }

const App = () => {
    const user = new User()
    return (
        <div className="App">
            <button> <a target="_blank" href={getRefServer()} >Login</a> </button>
            <button onClick={user.currentlyPlaying}>Buscar top tracks da Lorde</button>
            <button onClick={user.nextMusic}>Next</button>
        </div>
    )
}

export default App;
