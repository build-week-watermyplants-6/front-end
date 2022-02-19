import styled from "styled-components";



const AccessStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7% 0;
    

    img{
        border-radius: 50px;
        margin: 2%
    }
    h3{
        font-size: 2rem;
    }
    input{
        border:${props => props.theme.buttonBG} solid 3px;
        border-radius: 6px;
        font-size: 1.5rem;
        margin: 3% 1%;
        color:black;
        box-shadow: ${props => props.theme.buttonBG} 3px 2px 2px;
    }
    button{
        margin:3%;
    }
    .none{
        display: none;
    }
    .edit{
        color: ${props => props.theme.buttonColor};
        background-color: ${props => props.theme.buttonBG};
        font-size: 1.5rem;
        padding: 2% 4%;
        border-radius: 10px;
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .cancel{
        margin-left: 3%;
    }
    @media(max-width:800px){
        display: flex;
        flex-direction: column;

        /* img{
            margin-right: 10%;
        } */

    }
    
`

export default AccessStyles;