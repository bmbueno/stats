import styled from "styled-components"

const GenresMusic = (props) => {

    return (
        <>
            { (props.list?.length > 1) ? 
                <>
                    <h3 style={{color: '#1DB954'}}>Gêneros da música</h3>
                    <Genres>
                        { props.list.map((gender, id) => {
                            return <Gender key={id}> {gender.name} </Gender>
                        }) }
                    </Genres>
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

const Gender = styled.div`
    color: white;
    font-size: 20px;
    margin-bottom: 20px;

    @media(max-width: 800px) {
        margin-left: 20px;
    }
`;

const Genres = styled.div`
    @media(min-width: 800px) {
        display: flex;
        justify-content: space-between;
    }
`;