class Player {
    constructor(api) {
        //this.id = id
        //this.name = name
        //this.artist = artist
        //this.album = album
        this.api = api
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
            .then(response => {console.log(response.data)})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
}

export default Player