import axios from "axios";

const getAPIKeyLastFM = () => { return process.env.REACT_APP_API_KEY_LASTFM }
class Player {
    constructor(api) {
        this.api = api
        this.reproducing = false
    }

    getCurrentMedia = async () => {
        return this.api
            .get("/v1/me/player/currently-playing")
            .then(response => {
                return response.data.item
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    getGenres = async (name, artist) => {
        const api = axios.create({
            baseURL: "https://ws.audioscrobbler.com/",
        });

        let genres = await api
                .get("/2.0/?method=track.getInfo&artist="+ artist.name +"&api_key=" + getAPIKeyLastFM() + "&track=" + name + "&format=json")
                .then(response => {
                    return response.data.track.toptags.tag
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                    console.log("Nome música: " + name)
                });

        return await genres
    }
    getAllArtists = async (names) => {
        const api = axios.create({
            baseURL: "https://ws.audioscrobbler.com/",
        });

        let genres = await names.map(async artist => {
            return await api
                .get("/2.0/?method=artist.getinfo&artist="+ artist +"&api_key=" + getAPIKeyLastFM() + "&format=json&lang=pt")
                .then(response => {
                    return response.data
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        })

        return await Promise.all(genres)
    }
    getInfoTrack = async (id) => {
        return this.api
            .get("/v1/audio-features/" + id)
            .then(response => {
                return response
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    next = () => {
        this.api
            .post("/v1/me/player/next")
            .then(response => {})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    previous = () => {
        this.api
            .post("/v1/me/player/previous")
            .then(response => {})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    next = () => {
        this.api
            .post("/v1/me/player/next")
            .then(response => {})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    playPause = () => {
        const action = this.reproducing ? 'pause' : 'play'

        this.reproducing = !this.reproducing

        this.api
            .put("/v1/me/player/" + action)
            .then(response => {})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
   
}

export default Player