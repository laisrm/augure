import styled from "styled-components";

export const CardContainer = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
gap: 20px;
padding: 5%;
@media (max-width: 800px)
{ 
  width: 90%;
flex-wrap: wrap;
gap: 15px;
padding: 2%;
}
`
export const ImageSize = styled.image`
width: 100%;
height: 100%;
padding: 15%;
`
export const ButtonStyle = styled.div`
width:96%;
display: flex;
margin-top: 0;
margin-left: 0;
padding: 10px;
margin-bottom: 30px;

color: white;
  font-size: 4rem;
  text-transform: uppercase;
  display: block;
  
  text-align: center;

  color: whitesmoke;
  font-size: 1.2rem;

  padding: 20px;
  text-align: center;

display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
  -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
          justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-align-content: center;
      -ms-flex-line-pack: center;
          align-content: center;
border-color: white;
  color: white;
  box-shadow: 0 0 40px 40px #032436 inset, 0 0 0 0 #032436;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #032436;
};

@media (max-width: 800px)
{ 
  width:90%;
}
`
export const DialogStyled = styled.div`
display: flex;
flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 400px;
img {
    margin: 0 auto;
}  
`

export const Page = styled.div`
background-color:#021f2f;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;

@media (max-width: 800px)
{ 
width: 120%;
}
`

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
padding-top: 2%;
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