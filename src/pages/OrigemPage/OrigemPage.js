import React from "react";
import * as O from "./styled"
import logosolo from "../../images/logosolo.png"
import { useNavigate } from "react-router-dom";

export default function OrigemPage() {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  return (
    <O.Container>
      <O.ContainerButton>
        <O.Solo src={logosolo} onClick={goBack} />
        <O.Button onClick={goBack}>
          <O.Dentro>
            HOME
          </O.Dentro>
        </O.Button>
      </O.ContainerButton>

      <O.Paragrafo>
        <br /><br />
        <O.Titulo>
          <i>Origem do Jogo</i>
        </O.Titulo>
        <br /><br />
        Émuito possível que todo ser humano adulto já tenha ouvido falar ao menos em algum momento da vida sobre o tarô.
        <br /><br />
        Ainda que não tenha se aprofundado ou não tenha a menor vontade de se inteirar sobre as particularidades deste, que é um dos mais populares oráculos do mundo, sua existência é inegavelmente popular, já que até músicas de sucesso, nacionais e internacionais, lhe fizeram referência.
        <br /><br /><br />
        <i>"Caso do acaso
          Bem marcado em cartas de tarô
          Meu amor, esse amor
          De cartas claras sobre a mesa, é assim
          Signo do destino
          Que surpresa ele nos preparou
          Meu amor, nosso amor
          Estava escrito nas estrelas"</i>
        <br /><br /><br />
        Escrito nas Estrelas, composição de Arnaldo Black com Carlos Rennó, eternizada na voz da grande Tetê Espíndola
        <br /><br />
        De origem desconhecida, o tarô, conforme alguns estudiosos afirmam, teria surgido na Itália do século 15, mais especificamente, no centro da nobreza de Milão, Ferrara e Florença. Usadas inicialmente para diversão, as cartas (ou decks) eram jogadas com regras similares às do bridge. O baralho se chamava tarocchi e originalmente era composto por apenas quatro naipes de Arcanos Menores.
        <br />
        Com o passar do tempo, os artistas começaram a adicionar elementos gráficos, criando lentamente os Arcanos Maiores. A maioria dos decks era minuciosamente pintada à mão, o que os tornava extremamente caros, sendo acessados apenas pela aristocracia.
        <br /><br /><br />
        <strong>PUBLICIDADE</strong>
        <br /><br />
        Já no final do século 15 o carteado teve problemas com a Igreja Católica, que teria proibido todos os jogos para que os fiéis não se dispersassem com coisas que não estivessem focadas na prática da fé. A proibição acabou caindo algum tempo depois, já que ela incluía o tarô – e quem mais fazia uso desse jogo era a nobreza ou as classes dominantes, com quem a Igreja, definitivamente, não queria se indispor.
        <br />
        O tarô se multiplicou em muitas versões, até que, a partir da década de 70, se tornou mais inclusivo e menos centrado na cultura e na estética artística europeias.
        <br />
        Hoje em dia, é mais que um oráculo usado para adivinhação ou, como alguns consideram, para o autoconhecimento, É praticamente uma cultura, um estilo de vida e também uma oportunidade de reflexão sobre as questões mais humanas – e até sociais – a partir do contato com a arte, sobretudo simbólica e impregnada de sabedoria ancestral, que a combinação de cores, números, figuras e elementos lúdicos nos apresentam.
        <br /><br />
        Das centenas de baralhos, pautados pelas mais variadas temáticas e abordagens, temos três mais tradicionais ou conhecidos:
        <br /><br />
        - Tarô de Marselha,
        <br /> do deck original surgido no norte da Itália por volta do século 15, se mesclou e aprimorou a simbologia quando foi introduzido e popularizado, principalmente no sul da França, onde continuou sendo comercializado como um instrumento recreativo. Tem como característica principal suas imagens medievais adornadas com cores primárias (azul, vermelho e amarelo), conhecidas no mundo todo hoje em dia.
        <br /><br />
        - Tarô de Toth ou de Crowley,
        <br />criado pelo histórico e controverso escritor inglês Aleister Crowley, entre 1938 e 1943, em parceria com a artista plástica Frieda Harris.
        <br />Também é um dos mais usados no mundo.
        <br /><br />
        - E o não menos famoso e acessado Tarô de Rider-Waite,
        <br />criado pelo escritor e ocultista inglês Arthur Edward Waite.
        <br />E é sobre esse último que vale a pena aprofundar, sobretudo, por ser a mais tocante história de apagamento do mundo esotérico de todos os tempos.
        <br /><br />
        Arthur Edward Waite idealizou seu tarô, que futuramente seria o mais vendido em todo o mundo, e para executá-lo do jeito mais fiel ao que havia pensado, chamou uma figura histórica, no mínimo, inspiradora: a escritora, artista e ilustradora inglesa Pamela Colman Smith (1878-1951).
        <br />
        Filha de um casamento interracial entre mãe jamaicana e pai (branco) norte-americano, nasceu em Londres e passou a infância se dividindo entre Manchester, EUA e Jamaica com seus pais. Pamela era uma mulher possivelmente negra, de pele parda ou clara. Digo possivelmente, pois as identificações raciais se alteram de acordo com a influência cultural e territorial onde a pessoa negra está inserida.
        <br />
        Em geral, no Brasil, há uma bifurcação estabelecida pelo IBGE, obedecendo uma demanda dos movimentos de luta antirracista da década de 70, que coloca pessoas pretas e pardas na categoria negro, embora o pardo seja um termo discutível em uma sociedade que tem a informação fenotípica indígena também presente na formação de seu povo. Essa junção se deu, principalmente, porque as raças que estão na base da hierarquia social, indígena e negra, têm praticamente os mesmos problemas e sofrem os mesmos danos e discriminações raciais.

        Mas, fora do Brasil, é categórica a consciência de que nem todo mundo que não é branco, necessariamente, pode ser entendido como negro. Nos EUA, por exemplo, temos os termos "light skin", se referindo a descendentes de negros que possuem a pele clara, ou "person of color", usado para outras miscigenações. No Reino Unido, muitos filhos da miscigenação se consideram o mixed race ou biracial, que é como a princesa Meghan Markle e a atriz Zendaya se reivindicam.
        <br /><br />
        Mas o fato é que Pamela Smith não era branca, e esse detalhe já era suficiente para privá-la de muitas coisas – inclusive do respeito e da consideração pública com a sua arte.
        <br />
        A mãe de Pamela, prevendo as dificuldades que a filha teria na vida por ser uma mulher negra ou de cor, e para que ela obtivesse toda e qualquer vantagem racial que fosse possível da sua herança paterna branca, matriculou Pamela na escola de arte Pratt Institute, em Nova York. Em decorrência do falecimento da mãe em 1896, e também motivada por todos os problemas de aceitação que tinha por lá, Pâmela abandona a renomada escola de arte nesse mesmo ano, e sai pelo mundo acompanhando uma trupe de teatro itinerante, ganhando a vida como trovadora. Acabou ganhando os palcos, trabalhando também como atriz. Devido ao seu perfeito senso artístico, cultivado nos anos de escola, se tornou uma ótima figurinista e grande cenógrafa.
        <br />
        Apesar de muito charmosa, essa experiência artística nômade na qual Pamela embarcou, em plena virada do século 20, não era bem vista para uma mulher jovem e solteira. Mas isso não a fez retroceder na sua escolha. Pixie, como foi apelidada por amigos ainda na adolescência, era lésbica (em alguns relatos aparece como bissexual) e feminista, tendo participado ativamente do movimento sufragista.

        Ficou próxima e conviveu com muitos artistas de destaque e visibilidade social – eram seus contemporâneos o poeta e dramaturgo William Butler Yeats e o escritor irlandês Bram Stoker, por exemplo.
        <br />
        A essa altura, ela já trabalhava no desenvolvimento de uma linguagem artística cuja estética representasse suas convicções e expressasse sua personalidade. Os relatos históricos apontam que Pamela era uma figura altamente simpática, visionária e sensível, de um talento para as artes que não tinha como ser ignorado, o que a levou ao sucesso e atraiu muitos trabalhos como ilustradora.
        <br />
        Criou inúmeras obras autorais, muitas delas retratando a cultura e os costumes jamaicanos, trabalhou com Emanuel Swedenborg, Bram Stoker, William Yeats e outros.
        <br />
        Por volta de 1909, foi contratada por Arthur Edward Waite para fazer a arte de um novo baralho de tarô que ele estava interessado em criar, algo novo até aquele momento, já que todas as 78 cartas seriam ilustradas. Até então, apenas as cartas da corte (reis, rainhas, valetes e cavaleiros) eram ilustradas com figuras humanas e símbolos mais bem elaborados.
        <br />A escolha de Waite teria sido por reconhecer nela, além do talento artístico, um forte dom para a compreensão psíquica da vida e do mundo.
        <br />
        Pamela recebeu muito pouco para um dos mais árduos trabalhos que realizou.
        <br />Além da baixa remuneração, que muito provavelmente se deu pelo fato de ser mulher e negra, não teve nenhum reconhecimento público.
        <br /><br />
        Diferentemente de Waite, que entrou para a história das ciências por ter criado um baralho, cuja grafia perfeita e cheia de personalidade, expressão máxima do talento de Pamela, são responsáveis pela enorme popularidade e aceitação pública. Além do seu nome apagado, Pamela nunca recebeu royalties pelas altas vendas que levaram essas 78 cartas (ou decks) para os quatro cantos do mundo.
        <br />
        O Rider, que substitui o sobrenome de Pamela Smith, é da editora que o publicou, a Rider and Sons Company.
        <br /><br />E esta é a história das 78 cartas do tarô que atualmente tem mais de 100 milhões de cópias comercializadas em mais de 20 países, mas que esconde em seu belo traçado uma história nada incomum de apagamento machi-racista.
        <br /><br />
        Uma trajetória incrível, onde o maior golpe é o não reconhecimento por uma de suas obras mais difundidas: o tarô mais vendido e copiado do mundo.
      </O.Paragrafo>

    </O.Container>
  );
}