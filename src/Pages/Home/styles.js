import styled from "styled-components";
import Background from '../../assets/bg.svg'

export const Container = styled.div`
background: url('${Background}');
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100vh;

`;
export const Image = styled.img`
margin-top: 30px;
`

export const ContainerItens = styled.div`
padding: 50px 36px;
display: flex;
flex-direction: column;
gap: 14px;

height: 100vh;
`

export const InputLabel = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;

color: #EEEEEE;

margin-left: 15px;

`

export const Input = styled.input`
width: 342px;
height: 58px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
padding-left: 15px;
border: none;
outline: none;

font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 21px;

color: #FFFFFF;


`
