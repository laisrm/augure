import React from "react";
import * as J from "./styled"
import comecar from "../../images/comecar.gif"
import logosolo from "../../images/logosolo.png"
import { useNavigate } from "react-router-dom";

export default function CuriosidadesPage() {

const navigate = useNavigate()

const goBack = () => {
  navigate(-1)
}
  
return (
    <J.Container>
      <J.Paragrafos>

        <J.ContainerButton>
          <J.Solo src={logosolo} onClick={goBack}/>
          <J.Button onClick={goBack}>
            <J.Dentro>
              HOME
            </J.Dentro>
          </J.Button>
        </J.ContainerButton>

        <J.Titulo>
          <i>Como jogar?</i>
        </J.Titulo>

        <J.Body>
          <br />
          É muito fácil:
          <br /><br /><br />
          → Primeiro clique em 'NOVO JOGO' para virar as cartas
          <br /><br /><br />
          → Agora respire bem fundo e mentalizar a pergunta ou situação em que você procura uma resposta;
          escolher uma carta;
          <br /><br /><br />
          Clique e você terá sua resposta!
          <br /><br />
          Boa Sorte!
        </J.Body>
        <br /><br /><br />

      </J.Paragrafos>
      <J.Gif src={comecar} />

    </J.Container>
  )
}