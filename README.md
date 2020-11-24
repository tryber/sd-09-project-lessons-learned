# Boas vindas ao repositório do projeto Lições Aprendidas!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #VQV 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma `branch` específica e um _Pull Request_ para colocar seus códigos.

### 🗒ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-09-project-lessons-learned.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-09-project-lessons-learned`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-lessons-learned-project`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-09-project-lessons-learned**_
  * Crie os arquivos index.html e style.css
    * Exemplo: `touch index.html style.css`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-lessons-learned-project`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-09-project-lessons-learned/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-09-project-lessons-learned/pulls) e confira que o seu _Pull Request_ está criado
---

# Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ neste repositório.

Este _Pull Request_ deverá conter os arquivos `index.html` e `style.css`, que conterão seu código HTML e CSS, respectivamente.

## Prazo para entrega

O Prazo para entrega é de **7 dias corridos** após o último dia de projeto.

**Exemplo:** Se o último dia de projeto aconteceu na **quarta-feira, dia 17 de junho**, seu prazo final de entrega será na **quarta-feira 24 de junho** às **14 horas**.

Vale ressaltar que os projetos podem ter mais de um dia de duração, por isso o prazo de **7 dias** é contado à partir do último dia de projeto.

## ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a Pessoa Instrutora que te acompanha.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## Requisitos do projeto

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo](./exemplo.png)


## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀Observações importantes:

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure as pessoas instrutoras.

* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

---

## Requisitos Obrigatórios:

Você deve criar um site que com uma série de informações a respeito do que você aprendeu nos últimos três blocos, estilizado de forma apropriada.

**Em outras palavras, uma página de `Lessons Learned`**;

**Lembre-se de verificar sua página no [achecker](https://achecker.ca/checker/index.php).**

## Requisitos do projeto

### 1 - O corpo da página deve possuir uma cor de fundo específica

- Possuir cor de fundo: rgb(253, 251, 251)

### 2 - Seu site deve possuir uma barra superior com um título

- A barra deve possuir o ID "cabecalho"

- O elemento com o id `cabecalho` deve ser fixo no topo da página, com a propriedade top tendo `0px`

- O título deve estar dentro da barra e possuir o ID "titulo", além de ser uma tag `h1`

### 3 - A página deve possuir uma foto sua

- A foto deve ser inserida utilizando uma tag `img` com o ID "minha_foto"

### 4 - A página deve possuir uma lista de lições aprendidas

- A lista deve ser numerada e possuir o ID "licoes_aprendidas"

- A lista deve possuir 10 itens

### 5 - A página deve possuir uma lista de lições que ainda deseja aprender

- A lista **não** deve ser numerada e deve possuir o ID "licoes_a_aprender"

- A lista deve possuir 10 itens

### 6 - A página deve possuir um rodapé

- O rodapé deve utilizar a tag `footer` e possuir o ID "rodape"

### 7 - A página deve possuir pelo menos um link externo

- A configuração desse link deve ser feita para abrir em uma nova aba do navegador

### 8 - Crie um artigo sobre seu aprendizado

- A `tag` `article` devem ser utilizadas

- O artigo deve ter mais de 300 letras e menos de 600

### 9 - Crie uma seção que conta uma passagem sobre seu aprendizado

- A `tag` `aside` deve ser utilizada

- A seção deve ter mais que 100 letras e menos que 300

### 10 - Torne o seu site mais acessível e melhore seu ranqueamento em mecanismos de busca na Web aplicando os elementos HTML de acordo com o sentido e propósito de cada um deles

- A página deve possuir um elemento `article`

- A página deve possuir um elemento `header`

- A página deve possuir um elemento `nav`

- A página deve possuir um elemento `section`

- A página deve possuir um elemento `aside`

- A página deve possuir um elemento `footer`

### 11 - Seu site deve passar sem problemas na verificação de semântica do site achecker

## Requisitos Bônus:

### 12 - Adicione uma tabela à página

- A página deve possuir uma tabela

### 13 - Brinque com o Box model!

- Altere `margin`, `padding` e `border` dos elementos para ver, na prática, como esses atributos influenciam e melhoram a visualização dos componentes

### 14 - Altere atributos relacionados as fontes

- Altere o tamanho da letra

- Altere a cor da letra

- Altere o espaçamento entre as linhas

- Altere o `font-family`

### 15 - Faça com que seu artigo e seção sobre aprendizados fiquem um ao lado do outro

- Utilizar a classe 'lado-esquerdo'

- Utilizar a classe 'lado-direito'

- Verificar se os elementos com as classes lado-direito e lado-esquerdo estão posicionados corretamente

---

## Dicas

- Para fazer este projeto você deverá atribuir a barra superior o `position: fixed;`. Leia mais sobre ele [aqui](https://www.w3schools.com/css/css_positioning.asp).

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/lessons-learned`.

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO BLOCO 6 SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente;

* Lembre-se de sempre após um ~~(ou alguns)~~ `commits` atualizar o repositório remoto (o famoso `git push`);

* Os comandos que você utilizará com mais frequência são:

  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_;

  2. `git add` _(para adicionar arquivos ao stage do Git)_;

  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_;

  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_;

  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_.

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO - OPCIONAL, PORÉM MUITO IMPORTANTE! <3

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-09`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV 🚀
