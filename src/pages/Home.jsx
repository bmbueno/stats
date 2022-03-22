
const getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }

const Home = (props) => {
    const user = props.user
    return (
        <div className="App">
            <button> <a target="_blank" href={getRefServer()} >Login</a> </button>
            <button onClick={user.currentlyPlaying}>Buscar top tracks da Lorde</button>
            <button onClick={user.nextMusic}>Next</button>
        </div>
    )
}

export default Home