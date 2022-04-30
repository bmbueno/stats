import { useEffect, useState } from "react";
import styled from "styled-components";
import Genre from "../molecules/Genre";
import axios from "axios";

const getAPIKeyLastFM = () => { return process.env.REACT_APP_API_KEY_LASTFM }

const Genres = (props) => {
    const [selected, setSelected] = useState('')
    const [description, setDescription] = useState("")
    let aux = {}
    useEffect(() => {
        setDescription("")
    }, [props.list])

    const handleClick = (e) => {
       setSelected(e.target.text)
       getTag(e.target.text)
    }

    const getTag = async (tag) => {
        const api = axios.create({
            baseURL: "https://ws.audioscrobbler.com/",
        });

        await api
                .get("/2.0/?method=tag.getinfo&tag="+ tag +"&api_key=" + getAPIKeyLastFM() + "&format=json&lang=pt")
                .then(response => {
                    var element = document.createElement("div")
                    element.innerHTML = response.data.tag.wiki.summary
                    var text = element.innerText.replace("Read more on Last.fm.", "");
                    if (text.trim() !== "") {
                        text = element.innerText.slice(0, text.lastIndexOf(".")) + "."
                    }
                    setDescription(text.trim()) 
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        
    }
 
    return (
        <>
            { props.list.length > 0 ? 
                <>
                    <List>
                        { props.list.map((genre, i) => {
                            return <Genre onClick={handleClick} selected={selected} key={genre.name} name={genre.name}  />
                        })}
                    </List>
                    <Description>
                        {description}
                    </Description>
                </>
                : <></> 
            }
        </>
    )
}

export default Genres


const List = styled.ul`
    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`;

const Description  = styled.div`
    color: white;
    font-size: 18px;
    list-style-type: none;
`;