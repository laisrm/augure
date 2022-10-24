import React from "react";
import * as A from "./styled"
import augure from "../../images/augure.png"
import base from "../../images/basehome.png"
import como from "../../images/Botoes/como.png"
import tirar from "../../images/Botoes/tirar.png"
import origem from "../../images/Botoes/origem.png"
import curiosidades from "../../images/Botoes/curiosidades.png"
import git from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import whatsapp from '../../images/whatsapp.png'
import cat from '../../images/cat.gif'
import labenu from '../../images/labenu.png'
import { useNavigate } from "react-router-dom";



const AbrePage = () => {
  const navigate = useNavigate()

    const goToComoJogar = () => {
    navigate("/como-jogar")  
    }

    const goToTirarCartas = () => {
      navigate("/tirar-cartas")  
    }

    const goToCuriosidades = () => {
      navigate("/curiosidades")  
    }

    const goToOrigem = () => {
      navigate("/origem")  
    }
  
  return (
  <A.Todo>
  <A.ContainerImg>    
    <A.Back src={base}/>
    <A.Logo src={augure} / >
    <br/>

    <A.Sub>
    É você quem lê as cartas ou são as cartas que leem você?
    </A.Sub>

    <A.Bcomo onClick={goToComoJogar}><img src={como}/></A.Bcomo> 
    <A.Btirar onClick={goToTirarCartas}><img src={tirar}/></A.Btirar> 
    <A.Borigem onClick={goToOrigem}><img src={origem}/></A.Borigem> 
    <A.Bcuriosidades onClick={goToCuriosidades}><img src={curiosidades}/></A.Bcuriosidades> 

    <A.Hr/>

    <A.Footer>
      
    <A.Gato src={cat}/>
      <A.SigaNos>
        <h4>
          Contate-me
        </h4>
          <A.ContainerGit>
            <a href={'https://github.com/laisrm'} target="_blank" >
            <A.Git src={git} />
            </a>_
          
            <a href={'https://www.linkedin.com/in/laisrodriguesmartins/'} target="_blank" >
            <A.Git src={linkedin} />
            </a>_
            <a href={'https://wa.me/11992902244'} target="_blank" >
            <A.Git src={whatsapp} /></a> 
          </A.ContainerGit>
      </A.SigaNos>

      

        <A.A href={'https://www.labenu.com.br'} target="_blank" > 
        <A.P><strong>Curso FullStack</strong></A.P>  
        <A.Labe src={labenu} />
        </A.A>
    </A.Footer>
    </A.ContainerImg> 
    </A.Todo>
  );
}

export default AbrePage
  
