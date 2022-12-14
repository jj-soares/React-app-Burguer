import styled from "styled-components";
import Background from '../../assets/bg.svg'

export const Container = styled.div`
background: url('${Background}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%;
min-heigth: 100vh;

`;
export const Image = styled.img`
margin-top: 30px;
`

export const ContainerItens = styled.div`
padding: 50px 36px;
display: flex;
flex-direction: column;
gap: 14px;

min-height: calc(100vh - 170px);
`

export const User = styled.li`
grid-template-columns: 100px;
gap: 20px;



background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
border: none;
outline: none;
margin-top: 20px;

padding: 20px 0 25px 20px;

p {
    font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

};

p:first-child{
    color: #FFFFFF;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
};

button{
    background: none;
    border: none;
    cursor: pointer;
    padding-left: 14px;
    
    &:hover{
    transition : 584ms;
    transform : translateY(-6px);
    color: #000000;

}

}

`