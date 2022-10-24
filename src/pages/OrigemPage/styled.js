import styled from "styled-components"

export const Container = styled.div`
background-color:#021f2f;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
`
export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
padding: 4%
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
export const Paragrafo = styled.div`
color: white;
padding-left: 10%;
padding-right: 8%;
padding-bottom: 5%;
font-size: large;

`
export const Titulo = styled.p`
font-size: xxx-large;
font-family: cukoo;
margin-left: 25%;
color: white;
@media (max-width: 800px)
{ 
  font-size: x-large;
margin-left: 15%;

}
`
export const Solo = styled.img`
width: 5%;
margin-left: 5%;
margin-top: 2%;
position: absolute;
:hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);};

  @media (max-width: 800px)
{ 
  width: 15%;
margin-left: 5%;
margin-top: 7%;
position: absolute;
}
`