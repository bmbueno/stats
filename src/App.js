import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        const parametros = this.getHashParams();
        this.token = parametros.access_token;

    }
    getRefServer = () => { return process.env.REACT_APP_AUTHENTICATION_SERVER }
    getHashParams() {
        console.log(this.token)
        var hashParams = {}; 
        
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    topTracksLorde = () => {
        console.log(this.token)
        const api = axios.create({
            baseURL: "https://api.spotify.com",
        });

        api.defaults.headers.authorization = `Bearer ${this.token}`;

        console.log(api.defaults.headers.authorization)
        api
            .get("/v1/me/player/recently-played")
            .then(response => {console.log(response.data)})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
        
    }
    render() {
        return (
            <div className="App">
                <button> <a target="_blank" href={this.getRefServer()} >Login</a> </button>
                <button onClick={this.topTracksLorde}>Buscar top tracks da Lorde</button>
            </div>
        );
    }
}

export default App;
