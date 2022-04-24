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
    getGenresArtists = async (ids) => {
        return this.api
            .get("/v1/artists/", {
                params: {
                    ids: ids
                }
            })
            .then(response => {
                return response.data
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
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