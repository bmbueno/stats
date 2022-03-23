import axios from 'axios';
import Player from './Player'

class User {
    constructor() {
        this.token = this.#getToken()
        this.api = this.#generateApi()
        this.player = new Player(this.api)
        this.logged = false
    }
    #getToken = () => {
        const parametros = this.#getHashParams();

        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', parametros.access_token)
        }

        this.logged = true

        return localStorage.getItem('token')
    }
    #generateApi = () => {
        const api = axios.create({
            baseURL: "https://api.spotify.com",
        });

        api.defaults.headers.authorization = `Bearer ${this.token}`;

        return api
    }
    #getHashParams() {
        var hashParams = {}; 
        
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    
    control = (command) => {
        this.player[command]()
    }
    currentlyPlaying = () => {
        this.player.getCurrentMedia()
    }
}

export default User