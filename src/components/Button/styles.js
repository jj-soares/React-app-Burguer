
import styled from "styled-components"


export const Button = styled.button`
width: 342px;
height: 68px;

background:${rest => rest.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'} ;

font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
color: #FFFFFF;

margin-top: 26px;


display: flex;
align-items: center;
justify-content: center;
gap: 20px;


padding: 10px 30px;
border: solid #000000 1px;
box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
transition : 584ms;
transform: translateY(0);
cursor: pointer;
text-decoration: none;

&:hover{

transition : 584ms;
padding: 10px 41px;
transform : translateY(-3px);
background-color: #fff;
color: #000000;
border: solid 1px #000000;
}

&: active {
    background: black;
    opacity: 0.8;
}

img{
    transform: ${rest => rest.isBack && 'rotateY(180deg)'};
}

`
