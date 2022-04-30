import styled from "styled-components"
import Genres from "./Genres"

const GenresMusic = (props) => {

    return (
        <>
            { (props.list?.length > 1) ? 
                <>
                    <h3 style={{color: '#1DB954'}}>Gêneros da música</h3>
                    <Genres list={props.list}/>
                    <Divider /> 
                </>
                : <></> 
            }
        </>
    )
}

export default GenresMusic

const Divider = styled.hr`
    width: 100%;
`;

