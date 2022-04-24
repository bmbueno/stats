import axios from 'axios';

class Wiki {
    searchGenre = async (genre) => {
        const api = axios.create({
            baseURL: "https://pt.wikipedia.org/",
        });
        return api
            .get("api/rest_v1/page/summary/" + genre + ' music')
            .then(response => {
                return response
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
}

export default Wiki