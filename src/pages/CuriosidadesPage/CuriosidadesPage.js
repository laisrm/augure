import React from "react";
import * as C from "./styled"
import logosolo from "../../images/logosolo.png"
import { useNavigate } from "react-router-dom";

export default function CuriosidadesPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    return (
        <C.Container>

            <C.ContainerButton>
                <C.Solo src={logosolo} onClick={goBack} />
                <C.Button onClick={goBack}>
                    <C.Dentro>
                        HOME
                    </C.Dentro>
                </C.Button>
            </C.ContainerButton>

            <br /><br />
            <C.Titulo>
                <i>Curiosidades</i>
            </C.Titulo>

            <C.Paragarfo>
                <br /><br />
                <strong>OBJETIVOS</strong>
                <br />
                <hr />
                Na época medieval não existiam cartões de Tarô, os desenhos eram impressos em tábuas de madeira e tinham os mesmos objetivos dos tradicionais dos dias de hoje.
                <br /> Ciganos e bruxos realizavam os trabalhos em feiras e romarias para prever o futuro dos interessados.
                <br />
                <br />
                <br />
                <strong>POPULARIDADE</strong>
                <br />
                <hr />
                A população da Inglaterra e da Espanha acredita que o Tarô se tornou mais popular que o próprio Pôquer, um dos jogos considerados mais famosos e populares entre jovens e adultos no Brasil.
                <br />
                <br />
                <br />
                <strong>INTERPRETAÇÃO</strong>
                <br />
                <hr />
                Qualquer pessoa pode interpretar um Tarô, mas fazer um curso sobre ele pode te ajudar ainda mais.
                <br />Na internet existem diversos textos que expliquem as inúmeras interpretações do baralho.
                <br />É interessante se aprofundar na leitura para não decifrar erroneamente.
                <br />
                <br />
                <br />
                <strong>TIPOS DE TAROT</strong>
                <br />
                <hr />
                O Tarô mais famoso e popular do mundo é o de Marselha.
                <br />Com uma representação de imagens simples, as cartas têm o poder em descobrir segredos do nosso inconsciente, e também serve para termos um autoconhecimento a mais sobre nós
                <br />
                <br />
                <br />
                <strong>VERACIDADE</strong>
                <br />
                <hr />
                No começo da história do Tarô, as pessoas acreditavam que tudo era uma mentira para que os ciganos pudessem ganhar dinheiro interpretando as cartas para um grupo de pessoas em feiras e festivais.
                <br />Ao longo do tempo, as pesquisas comprovaram que as cartas, histórias e interpretações são verídicas.
                <br />
                <br />
                <br />
                <strong>INTERPRETAÇÃO</strong>
                <br />
                <hr />
                O Tarô não nos obrigada a nada, principalmente se você não gostou ou também se não se interessou pelos caminhos que o tarólogo pronunciou a partir das cartas.
                <br />
                <br />
                <br />
                <strong>TARÓLOGO</strong>
                <br />
                <hr />
                Quem quiser consultar presencialmente o seu passado, presente e futuro nas cartas de Tarô, saiba quem procurar!
                <br />Por mais que as pesquisas comprovam que as cartas nunca erram, ainda sim existem muitos “espertinhos” que usam estes métodos para inventar histórias e, principalmente ganhar dinheiro.
                <br />Então, antes de tudo, conheça o lugar onde você buscará interpretações ou tenha algumas referências de amigos e familiares que conheçam um pouco mais sobre o assunto.
            </C.Paragarfo>
        </C.Container>
    )
}