## Mini Documentação sobre decisões tomadas no desenvolvimento

### O uso do preval

Como consta na justificativa do plugin (https://www.npmjs.com/package/next-plugin-preval), o getStaticProps do Next faz o fetch todas as vezes pra cada página diferente, mesmo quando precisamos de algo site-wide, importar uma vez e usar em várias páginas. Nesse caso o preval simplifica indo fazer o fetch apenas uma vez durante o processo de build e deixando estes dados disponíveis em formato Json, e assim os componentes que precisarem desses dados podem apenas importar o Json e usar.

### O Context para seleção de região

Começou porque tem esse link na homepage que diz pra pessoa clicar na região que ela quer ver as viagens, mas tecnicamente todas são exibidas dentro do mesmo ambiente e a pessoa tem que clicar pra selecionar uma ou outra região. O link que traz da home para /destinos então deveria manter informação sobre qual região a pessoa está querendo visualizar e trazer o primeiro render com esse state selecionado. O \_app então é o wrapper mais próximo de cada página, por isso ele ta renderizando elas com o SelectionProvider em volta. Porque mais de uma página compartilham essa informação, e acho que não tem um jeito mais simples de fazer isso.

#### Dúvidas durante desenvolvimento:

- Divisão das travels para servir cada página
  Como as travels vão estar divididas em páginas diferentes para cada 'type' que elas possuem, eu poderia pegar já separado só pacotes, cruzeiros e rodoviários. Só que, isso significaria 3 fetches. Como é tudo em tempo de build, não tem a distinção de 'só vai ser usado caso precisar' que poderia justificar separar em fetches menores. Dessa forma, considero que manter como está vai ser mais rápido. As travels são um file só, e cada página que vai exibir apenas um tipo vai ter que fazer um filter sobre esse file para pegar as que lhe convém
- Como dividir as páginas de destinos que são basicamente iguais
  As páginas /cruzeiros /pacotes e /rodoviarios vão ter o mesmo layout e funcionamento, apenas com dados diferentes. Ter 3 páginas copiadas não parece uma opção legal, então surgem acho que duas opções: recolher todo o funcionamento de lógica da página para um custom Hook e importar em cada uma, ou fazer as 3 realmente serem a mesma mas mudar dinamicamente como páginas de blog, e como é feita a /travel em si, com getStaticPaths. Vou começar testando pela segunda opção, que parece reduzir ainda mais onde o código é aplicado.

#### A opção withExtra na SelectOptions

Isso foi pq de jeito nenhum eu tava conseguindo adicionar no array de regiões esse acumulado de "All regions" pra contar como uma região na exibição dos filtros, então fiz ir por um objeto separado mesmo.

Pq o allRegions é importado direto do context ao invés de ser calculado na página? Pra evitar processamento só será?

O padrão de subRegion é '0' por nenhum motivo específico mesmo, só foi definido como o valor vazio. Já o Region não fica nunca com valor vazio, o padrão dele é o 'Todos' ou senão alguma selecionada. O padrão tem id = '0' que é meio que o equivalente a estar 'vazio' também no filtro.

São utilizadas as próprias funções do context pra sempre alternar as regiões, só o setRegion tem um wrapper a mais pq quando seta uma região desselecionada todas as subRegiões. Mas se é setado direto no context, pq se eu vou pra home e volto não continua marcado o que estava?

Pq as funções todas de /destino precisam ta dentro do function component? Pq pra gente ter acesso ao Hook useSelection, temos que estar dentro de um component. E o resto das funções que filtram e tal, precisam desses dados retornados pelo hook. Daria, pra colocar essas funções fora e passar os valores por parametro pra elas. Mas como elas só estão sendo declaradas, e não executadas, elas prejudicam o render? Eu não tenho informação de que seja um problema, mas ficarei atento pra mais informações dessa situação.

Agora tenho que pensar onde é melhor de filtrar as regiões e subregiões, e tb, como filtrar elas?

Em que circunstância o allTravels vai ser relevante? Elas não vão se misturar nunca a princípio, e se eu começar a ter que filtrar esse array em muitos lugares é melhor ter fetches separados realmente. Só que, pensando agora, se eu for criar fetch getTravelsOfCategory, eu tb vou criar getRegionsOfCategory e etc etc, vai separar tudo. Talvez seja melhor filtrar msm.

FEITO ENTÃO PIÁ! Até que deu uma dor de cabeça, mas ta aí. Se algum dia olhar o código e se perguntar pq que essa porra ta assim, bom acho que lendo aí descobre. Em resumo: A gente (eu no caso) quer só pegar pra cada página as regiões e subregiões que por ventura contenham viagens dentro da categoria que a página está servindo. 1) Filtramos de todas as viagens um array só com as viagens desse tipo. Filtramos em seguida tb as regiões, usando um filter que dentro filtra (inception) todas as viagens que pertencem a essa região, isso é útil pq ganhamos aqui o travelCount novo dessa região, e serviu elegantemente pra retornar esse mesmo valor como cláusula do filter (se for 0 é = false hehe). Pra subregiões mesma lógica.

Agora os 'data' são importados lá em cima só para serem usados pela função staticProps. O componente em si usa os props que essa função passa (os valores de data mas filtrados).

#### Note to self: yep, time to learn useEffect and such...

#### Mais um dia, mais umas coisas possivelmente estranhas sendo feitas

Aqui é sobre o hadleClick do DesktopNavigation. Primeiro o problema já se sabe né, como temos dois links no menu que levam para a mesma página só que seções diferentes, e essas seções são controladas por state, precisamos que esses links do menu não só levem à página como a levem com seus respectivos states selecionados. Então, precisei adicionar um onClick condicional no menu. Como na vdd ele é meio independente e essa condicional também não depende de quem ta chamando ele, pq ele ta em todas as páginas da mesma forma, eu tive que adicionar a info de id da região no pr´´oprio dataFile do menu, lá ficou como selecRegion daí a 'ação' que esse item do menu tb efetua, mas o handler inteiro da situação ficou pro próprio componente desktopNavigation, ele que teve que importar os context e fazer digamos a parte lógica disso.

#### Sobre ter path absolute no projeto

Ia ter me poupado muitos ../ agora se tivesse essa config. Sei como fazer em ts, teria que ver se tem como sem também, deve ter.

#### Unindo navigation em uma folder e abstraindo lógica do clique

Tudo que foi implementado primeiro só no Desktop agora foi abstraido pra uma função e colocado em outro arquivo. Isso gerou algumas dúvidas durante o processo, sendo elas 1) Essa função seria um custom hook? Ela na vdd parece que seria um custom hook só se tivesse instanciando ela mesma hooks dentro do seu corpo. No nosso caso, ela chama um outro custom hook, não criando um em si... a príncipio foi refatorada como utils e não como hooks, e portanto não usando o prefixo use.
Segunda dúvida sobre onde iria essa pasta, sendo hooks ou utils. E isso é questão de organização mesmo. Poderiam estar todos em uma pasta só direto em src/ ou dentro da pasta do componente para a qual foram criadas. No caso isso dependeria também da abrangência da sua funcionalidade. Nesse caso ela é muito específica e portanto vai ficar junto com o componente.

#### Mudando state + url em [category].js

Então, tivemos que fazer umas manobras nessa parte aí. O state selectedRegion chega como 0 na página, roda um render com isso, roda o useEffect, vê que é 0 e troca pra Todas, roda um render na página; Aí, clica em qualquer item do menu, ele troca o state, que desencadeia um render na pagina, e depois só troca a url. Uma coisa que faz com que isso não seja um problema é um pequeno loader, que se for bem feito deixa a transiçao bem suave. Rápida ela continua sendo...
Outro ponto é talvez não deixar pro useEffect na página fazer o trabalho sempre. Ele tava configurado assim pq só acontecia uma vez de o state da region vir zerado, agora isso ta acontecendo toda vez. Então, a opção seria os menus preencherem o state já com o Todas ao invés de com o 0, isso a princípio nos pouparia um render desnecessário. TODO ? Putz, ainda tem o lance de que tem que recalcular a lenght por category...

#### Diferença com o menu mobile

O menu mobile exigiu uma ideia diferente, pq fui pronto pra colocar o OnClick nele de setar o selectionContext, mas aí eles já tinham de mais cedo um onClick pra fechar o próprio menu quando é clicado. Então, a primeira maneira que me ocorreu e a que eu fiz, foi refatorar a 'getSelection' que é a ex-hook né atual utils, pra além de receber a região para qual ela devolve a função que seta o state, ela agora recebe também uma callback, opcional, que no caso o menu mobile passa e que é pra fechar o menu.
De início ficou feio isso aí, mas agora até que ta bonitinha. Eu só realmente não sei sobre a legibilidade, pq mais do que o caso de saber o qe ta acontecendo talvez tb é o pq ta acontecendo assim né, então só no futuro quando eu ver de novo pra saber kk

#### Montando componente muitas vezes

Toda vez que eu abro o menu mobile, ele roda todo render dele, que envolve map do menuData, setar as funções onClick e todas coisaradas, que não vão ser diferentes nunca no decorrer do app, então pra ela seria um bom caso imagino do Hook Memo.

//
[[redirects]]
from= "/api/\*"
to= "/.netlify/functions/:splat"
status= 200

#### Modo Preview

então, por causa da parada da conversão da data, reparei que ele fica passando varias vezes pelo render do componente, simplesmente quando abre a página. fiz o teste aqui com a pagina index que nao tem essa mesma verificação por data, e de qualquer forma ela também renderiza 3 vezes, não sei se é alguma falta de otimização do próprio preview, algo normal, ou algo que eu tenho que corrigir rs

Outro problema sobre isso: não deve ser coincidência, mas precisaria ser testado, que o tempo de build mais do que duplicou desde o preview adicionado nas duas páginas... ta chegando à 5 min. Aí uma coisa que pensei foi se talvez ter as condicionais de preview e no-preview na mesma página atrapalha, se eu poderia criar versões somente preview das páginas, pra linkar no cms, e se isso aliviaria alguma coisa. Mas é questão de tirar um tempo e fazer uns testes realmente, pq teria que ser testado em prod

https://www.sanity.io/docs/document-actions-api
https://www.sanity.io/docs/transactions
https://www.sanity.io/docs/webhooks

### Descontos agendados

ok a merda com datas e static generation, é que eu to checando a validade do desconto na hora do BUILD
e aí vai estar lá, sei lá data de inicio da promoção daqui um dia, blz vamos colocar como false aqui por enquanto, mas e aí
não rola nenhum build até o outro dia, vai continuar como false, a promoção não vai aparecer....
se não pode ser no build, quando pode ser esse check? se for em real-time, tipo, dentro do componente... vai fazer o cálculo a cada re-render, não? vai tornar a página o quão pesada?
outra alternativa seria tornar as viagens server-side... porém... as viagens provavelmente vão ser o conteúdo mais acessado do site, as api requests pro cms vão pra lua se deixar todas as viagens ssr...
além disso, na página de 'categoria' das viagens, tb vai ser interessante que esses badges de desconto e timer apareceram.
então, vai acabar tornando o site todo ssr
sem falar que, o ssg é uma vantagem mt grande pra ser perdida só por causa de um little counter boi
who would win

mas agora algo pra COMEMORAR
a lógica do schedule funciona PERFEITAMENTEEEE uhu, o maluco calcula

### solução possibilidade

eu acho, e é a minha ideia agora, que eu posso colocar o check da validação da data do desconto
num useEffect com [], pra rodar uma vez quando monta a página. Assim, não vai ficar pesado de ficar rodando toda vez que renderiza o componente... Mas, se a página for atualizada, vai ser chamado de novo (certo? é isso, né? rs) então isso seria até que bem ideal...
E da mesma forma o contador né, funciona em cima da mesma lógica. Hum, eu acho que iso tem uma boa possibilidade de funcionar :D
