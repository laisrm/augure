import { maxHeight } from "@mui/system"
import styled from "styled-components"

export const Todo = styled.div`
margin: 0;
padding: 0;
border: none;
outline: none;
height: 100%;
width: 100%;
overflow: hidden;
background-color: black;

@media (max-width: 800px)
{
margin: 0;
padding: 0;
border: none;
outline: none;
height: 1160px;
width: 550px;
overflow: hidden;
background-color: black;
}
`
export const ContainerImg = styled.div`
display: flex;
justify-content: left;
`
export const Back = styled.img`
width: 100%;
position: relative;
@media (max-width: 800px)
{ 
  width: 100%;
  height: 1150px}
`
export const Logo = styled.img`
width: 55%;
margin-left: 5%;
margin-top: 8%;
float: left;
position: absolute;
@media (max-width: 800px)
{ 
  width: 75%;
margin-left: 10%;
margin-top: 35%;}
`
export const Sub = styled.p`
height: 50px;
margin-left: 30%;
margin-top: 2%;
position: absolute;
color: whitesmoke;
font-size: x-large;
font-style: italic;  
font-family: Noto Sans, sans-serif;	
@media (max-width: 800px)
{ 
  width: 100%;
margin-left: 25%;
margin-top: 2%;}
`

export const ContainerButton = styled.div`
display: flex ;
flex-direction: column;
justify-content: center;
`
export const Bcomo = styled.div`
margin-left: 25%;
margin-top: 35%;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);};

  @media (max-width: 800px)
{ 
  width: 150px;
height: 50px;
margin-left: 3%;
margin-top: 80%;
}
`

export const Btirar = styled.div`
margin-left: 25%;
margin-top: 45%;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);};

  @media (max-width: 800px)
{ 
  width: 150px;
height: 50px;
margin-left: 3%;
margin-top: 120%;
}
`

export const Borigem = styled.div`
margin-left: 25%;
margin-top: 55%;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);};

  @media (max-width: 800px)
{ 
  width: 150px;
height: 50px;
margin-left: 3%;
margin-top: 160%;
}
`
export const Bcuriosidades = styled.div`
margin-left: 25%;
margin-top: 65%;
position: absolute;
:hover,
button:focus {
-webkit-transform: scale(1.1);
transform: scale(1.1);};

@media (max-width: 800px)
{ 
  width: 150px;
height: 50px;
margin-left: 3%;
margin-top: 200%;
}
`
export const Footer = styled.div`
display: flex;
width:97%;
margin-left: 1%;
height: 100px;
position: absolute;
margin-top: 86%;
    background-color: #cba9d5;   

    @media (max-width: 800px)
{ 
  width:540px;
margin-left: 1%;
height: 95px;
position: absolute;
margin-top: 270%;
}
`

export const Hr = styled.hr`
width:96%;
margin-left: 1%;
border: 5px solid #cba9d5;
margin-top: 84%;
position: absolute;
@media (max-width: 800px)
{ 
  width: 540px;
margin-left: 1%;
border: 5px solid #cba9d5;
margin-top: 260%;
}
`

export const SigaNos = styled.div`
color: #1d2e42;
align-items: center;
display: flex;
flex-direction: column;
margin-left: 43%;
@media (max-width: 800px)
{ 
  margin-left: 35%
}
`
export const Gato = styled.img`
margin-left: 10%;
position: absolute;
width: 10%;
@media (max-width: 800px)
{ 
  margin-left: 2%;
position: absolute;
width: 110px;;
}

`
export const ContainerGit = styled.div `
margin-top: 0;
display: flex;
justify-content: space-around;
`
export const Contato = styled.div`
color: #1d2e42;
display: flex;
justify-content: space-between
`
export const Endereco = styled.h6`
text-align: right;
font-size: small
`
export const Git = styled.img`
width: 30px ;
`
export const Copy = styled.p`
width: 100%;
margin-top: 5%
`

export const Labenu = styled.img`
width: 50%
`
export const Labe = styled.img`
width: 35%;
height: 40%;
margin-left: 12%;
margin-bottom: 2%;
`
export const A = styled.a`
margin-top: 1.7%;
width: 50%;
margin-left: 25%

`

export const P = styled.p`
color: #f16301;
font-size: medium;
margin-top: 0
`

