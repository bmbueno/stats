class Player {
    constructor(api) {
        this.api = api
        this.reproducing = false
    }
    getCurrentMedia = () => {
        this.api
            .get("/v1/me/player/currently-playing")
            .then(response => {console.log(response.data.item.name)})
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