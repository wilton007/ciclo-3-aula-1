#  :new: Ciclo 3: Atividade 1

## Índice


  - [Resumo do projeto](#resumo-do-projeto)
  - [Objetivos de aprendizagem](#objetivos-de-aprendizagem)
  - [Orientações:](#orientações)
  - [Critérios de aceitação](#critérios-de-aceitação)
  - [Links utéis:](#links-utéis)
  - [Dicas](#dicas)

***

## Resumo do projeto


<img src="https://github.com/campinho-digital/ciclo-1-desafio-1/assets/108235987/37aa4975-97d0-4c68-80f2-700914f5d0b0" alt="Instagram post dia do garçom ilustrado preto e amarelo" width="300">


A Pizzaria Patroni contratou os serviços da Sure you want to accept? para proporcionar aos seus garçons uma maneira mais rápida de calcular o valor total da conta e garantir maior agilidade no pagamento. Para isso, precisam de um programa que receba o número de pessoas na mesa, o valor da comanda e devolva quanto cada cliente daquela mesa precisará pagar.

:warning: O restaurante oferece um desconto de 10% se o pagamento for feito via PIX ou em dinheiro, então o programa precisa ter a opção de inserir o meio de pagamento e calcular automaticamente esse desconto antes de exibir a conta final aos clientes. 

## :pushpin: O que deve ser feito: 
Seu desafio é  criar esse programa que será utilizado pelos garçons do estabelecimento, lembre-se de que será preciso  inserir o número de pessoas na mesa, o valor total da conta e o método de pagamento. O programa então calculará o valor total com o desconto aplicado, bem como o valor que cada pessoa deve pagar.


Além disso, a Pizzaria Patroni já elaborou o layout do programa com um design específico, portanto, é importante seguir as diretrizes visuais fornecidas para garantir uma experiência consistente e profissional.

Nesse desafio utilizaremos o `Figma` que é uma ferramenta de design colaborativo baseada na web que permite criar, prototipar e colaborar em projetos de design de forma eficiente. Ele oferece recursos para criar interfaces de usuário, layouts, ícones e muito mais, além de permitir o trabalho em equipe em tempo real, facilitando a colaboração entre designers e desenvolvedores.

[Layout do programa](https://www.figma.com/file/Sp22K6G0oULASNdlQflspZ/Untitled?type=design&node-id=0%3A1&mode=design&t=FkoJcYJubnCiNAcN-1)


## :computer: Objetivos de aprendizagem
  
  
### JavaScript:

- Saída de dados com `console.log()`
- Variáveis e constantes 
- Entrada de dados com `prompt()`
- Entrada de dados e uso de variáveis
- Funções
  

### Git e GitHub:

- Uso de comandos de git: `git add` `git commit` `git pull` `git push`
- Gerenciamento de repositorios de GitHub (clone e fork)

HTML e CSS:
- Estruturação básica de um documento HTML
- Estilização de elementos usando CSS
- Uso de classes e IDs para aplicar estilos específicos
- Incorporação de imagens e outros recursos em um documento HTML
- Criação de formulários HTML para entrada de dados
- Modelo de Objeto de Documento (DOM):
- Manipulação de elementos HTML usando JavaScript
- Seleção de elementos por classes, IDs e tags
- Alteração de conteúdo, estilo e comportamento de elementos HTML dinamicamente
- Criação e remoção de elementos HTML via DOM



##  :bangbang: Orientações:

- O trabalho pode ser feito em dupla ou individual.
- O projeto deverá ser entregue subindo o seu código no GitHub (commit/push) em seguida o link do repositório deverá ser enviado na atividade na plataforma da Campinho Digital.


##  :white_check_mark: Critérios de aceitação

- Funcionalidade Básica: O programa deve permitir que o usuário insira o número de pessoas na mesa, o valor total da conta e o método de pagamento.

- Cálculo do Valor Total: O programa deve calcular corretamente o valor total da conta, levando em consideração o número de pessoas na mesa e o valor total da comanda.

- Aplicação de Desconto: O programa deve aplicar um desconto de 10% se o pagamento for feito via PIX ou em dinheiro.

- Divisão Equitativa: O programa deve calcular corretamente o valor que cada pessoa da mesa deve pagar, dividindo igualmente o valor total da conta entre o número de pessoas, após aplicação do desconto.

- Exibição de Resultados: O programa deve exibir corretamente o valor total da conta com desconto aplicado, bem como o valor que cada pessoa deve pagar.

- Suporte a Diferentes Métodos de Pagamento: O programa deve permitir que o usuário escolha entre diferentes métodos de pagamento, como PIX, dinheiro ou cartão, e aplicar o desconto corretamente de acordo com o método escolhido.


###  :rocket: Hacker edition:

- Sugestões de Gorjeta: Adicionar sugestões automáticas de gorjeta com base no valor total da conta ou personalizadas pelo usuário.


### :link:  Links utéis:

[Constantes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const)
[Sintaxe e tipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
[Diferenças de var const e let](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)
[Prompt](https://developer.mozilla.org/pt-BR/docs/Web/API/window/prompt)
[Alert](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/alert)
[Convertendo String para Inteiro](https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript)
[HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[HTML forms](https://www.w3schools.com/html/html_forms.asp)
[HTML DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
[CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)


## :shipit: Dicas


 - Certifique-se de estar com a sua maquina configurada de acordo com as aulas vistas anteriormente.

 - Lembre se que o método `prompt()` em JavaScript retorna uma string. Ele exibe uma caixa de diálogo que permite ao usuário inserir um texto e retorna esse texto como uma string. 
para efetuar uma operação matemática precisamos trabalhar com números ou seja será preciso converter nosso tipo string para um tipo number :arrow_heading_down:


~~~javascript
let stringNumero = "123";
let numeroInteiro = parseInt(stringNumero);
console.log(numeroInteiro); // Saída: 123
~~~


- os parênteses (()) são usados para controlar a ordem de avaliação das expressões em uma operação. Isso é conhecido como precedência de operadores.

#####  Neste caso, de acordo com a precedência de operadores padrão, a multiplicação (*) é avaliada antes da adição (+), resultando em 3 * 4 = 12, e então 2 + 12 = 14.
~~~javascript
let resultado = 2 + 3 * 4;
console.log(resultado); // Saída: 14
~~~

##### Agora, se quisermos que a adição seja avaliada antes da multiplicação, podemos usar parênteses para forçar a ordem de avaliação como abaixo, os parênteses indicam que a adição deve ser feita primeiro, resultando em 2 + 3 = 5, e então 5 * 4 = 20.

~~~javascript
let resultado = (2 + 3) * 4;
console.log(resultado); // Saída: 20
~~~






