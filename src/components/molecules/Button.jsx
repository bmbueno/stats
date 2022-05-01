import styled from "styled-components";

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} >{props.children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    min-width: 20px;
    min-height: 20px;
    padding: 10px 20px;
    background-color: #1DB954;
    border: 0px solid;
    border-radius: 100px;
    color: white;
    font: bold 18px Lato;
    height: fit-content;
`

export default Button