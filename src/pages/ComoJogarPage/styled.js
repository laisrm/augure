import { style } from "@mui/system"
import styled from "styled-components"

export const Container = styled.div`
height: 100%;
width: 100%;
background-color:#021f2f;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`
export const Paragrafos = styled.p`
color: white;
padding: 5%;
font-size: large;
@media (max-width: 800px)
{ 
margin-right: 5%;
}
`
export const Titulo = styled.p`
font-size: xxx-large;
font-family: cukoo;
margin-top: 10%;
margin-left: 35%;
@media (max-width: 800px)
{ 
  font-size: xx-large;
margin-top: 10%;
margin-left: 25%;
}
`
export const Gif = styled.img`
width: 90%;
margin: 5%;
border: 5px white;
border-style: dotted;
`
export const Solo = styled.img`
width: 5%;
margin-left: 5%;
margin-top: 2%;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);}
  @media (max-width: 800px)
{ 
  width: 12%;
margin-left: 5%;
margin-top: 5%;
position: absolute;
}
`
export const ContainerButton = styled.div`
display: flex;
flex-direction: column;

`
export const Button = styled.button`
border: none;
width: 15%;
background-color: #021f2f;
color: white;
    margin-left:20px;
    font-weight: bold;
    &:hover {
        cursor:pointer;
    }
`
export const Dentro = styled.p`
font-size: large;
margin-top: 0;
    :hover,
button:focus {
  color: #bfff00;  
  border-bottom: 3px solid #bfff00;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
`
export const Body = styled.div`
margin-left:5rem;
`
