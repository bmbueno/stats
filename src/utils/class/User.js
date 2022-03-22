import axios from 'axios';
import Player from './Player'

class User {
    constructor() {
        const parametros = this.#getHashParams();
        this.token = parametros.access_token;
        this.api = this.#generateApi()
        this.player = new Player(this.api)
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
    nextMusic = () => {
        this.player.next()
    }
    currentlyPlaying = () => {
        this.player.getCurrentMedia()
    }
}

export default User