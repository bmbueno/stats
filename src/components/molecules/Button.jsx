import styled from "styled-components";

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} >{props.children}</ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    height: fit-content;
    min-width: 20px;
    min-height: 20px;
    padding: 10px 20px;
    background-color: orange;
    border: 0px solid;
    border-radius: 20px;
    color: white;
    font: bold 16px Lato;
`

export default Button