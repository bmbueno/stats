import axios from 'axios';
import Player from './Player'

class User {
    constructor() {
        this.token = this.#getToken()
        this.api = this.#generateApi()
        this.player = new Player(this.api)
        this.logged = false
    }
    getInfoUser = async () => {
        return this.api
            .get("/v1/me/")
            .then(response => {
                return response.data
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    #getToken = () => {
        const parametros = this.#getHashParams();

        if (!localStorage.getItem('token')) {
            localStorage.setItem('token', parametros.access_token)
        }

        this.logged = true

        return parametros.access_token
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
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    #organizeTrackInfo(basicInfo, adicionalInfo) {
        let artistsNames = basicInfo.artists.map((artist) => {
            return artist.name
        })
        return this.player.getAllArtists(artistsNames).then(data => {
            let artistsGenres = data.map(item => {
                try {
                    return { name: item?.artist?.name, bio: item?.artist?.bio, genres: item?.artist?.tags.tag }
                } catch(e) {
                    console.log(e)
                    return {}
                }
            })
        
            return this.player.getGenres(basicInfo.name, basicInfo.artists[0]).then(data => {
                let nameArtists = basicInfo.artists.map((artist) => {
                    return artist.name
                })
                return {
                    name: basicInfo.name,
                    artists: nameArtists.join(', '),
                    album: { name: basicInfo.album.name, image: basicInfo.album.images[0] },
                    artistsGenres: artistsGenres,
                    genres: data,
                    characteristics: {
                        popularity: basicInfo.popularity,
                        acousticness: adicionalInfo.acousticness,
                        danceability: adicionalInfo.danceability,
                        energy: adicionalInfo.energy,
                        instrumentalness: adicionalInfo.instrumentalness,
                        liveness: adicionalInfo.liveness,
                        loudness: adicionalInfo.loudness,
                        speechiness: adicionalInfo.speechiness,
                        valence: adicionalInfo.valence
                    }
                }
            }).catch((e) => {
                console.log(e)
                return {}
            })
        })
    }
    control = (command) => {
        this.player[command]()
    }
    currentlyPlaying = async () => {
        return this.player.getCurrentMedia().then(media => {
            if (media)
                return this.player.getInfoTrack(media.id).then(response => {
                    return this.#organizeTrackInfo(media, response.data)
                })
            else
                return {}
        })
    }
}

export default User