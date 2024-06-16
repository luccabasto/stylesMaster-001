
# Twisted Pyramid

    Praticando e aprendendo técnicas com o SCSS e CSS.

 <p> 
    A Tarefa da vez consiste em criar um Twisted utilizando Sass e CSS sem uso de lib para componentes.
 </p>

Nesse exemplo consegui executar utilizando as duas ferramentas, css puro e loop no sass a seguir vou deixar anotado os pontos fortes que encontrei em cada uma. 

#### SCSS

* Loop For:<br>
     Seguindo a lógica de um loop padrão com a atenção no momento da expressão/cálculo de como as cores e tamanhos são calculados.

<code>
    $color:70 + ($i * 8); //Calculando a cor baseada no índice
    <br>
    $size: (270 - (10 * $i)); // Calculando o tamanho baseado no índice.
</code>
<br>
<br>

#### $color: 70 + ($i * 8) - Essa linha esta calculando a cor da borda de cada onda (class .wave) baseada no índice do loop.
<br>
Fórmula: 

 1. $i é o índice atual do loop criado `@for $i from 1 through 20` <br>(ao ler o código entederá o motivo da largura do loop ser até 20).
 
 2. Multiplicação ($i * 8): Multiplicando o índice por 8 consigo criar um incremento progressivo de cor.
<br>
    2.1 Adição (70 +): Adicionando 70 ao resultado da multiplicação.

Portanto, a cor de cada onda será: 
* Para `i = 1`: `70+ (1 * 8) = 78`
* Para `i = 2`: `70+ (2 * 8) = 86`
* Para `i = 3`: `70+ (3 * 8) = 94`
* E assim por diante...

Com isso tenho como resultado uma gama de cores de 78 a 230 (para `i` de 1 a 20); Ok meio complicado de entender só ela escrita mas ao visualizar isso em código vai ver que dessa forma cria um efeito visual em que as cores das bordas ficam progressivamente mais claras. 

#### $size: (210 - (10 * $i)) - Essa linha esta calculando o tamanho de cada onda, também baseado no índice do loop. 
<br>
Fórmula: 

1. $i é o índice atual do loop criado `@for $i from 1 through 20`<br>
    (ao ler o código entederá o motivo da largura do loop ser até 20).
 
2. Multiplicação (10 * $i): Multiplicando o índice por 10 para criar um decremento progressivo de tamanho.
<br>
    2.1 Subtração (210 -): Subtrai o resultado da multiplicação de 210.

Portanto, a cor de cada onda será: 
* Para `i = 1`: `210 - (1 * 10) = 200px`
* Para `i = 2`: `210 - (2 * 10) = 190px`
* Para `i = 3`: `210 - (3 * 10) = 180px`
* E assim por diante...

Isso resulta em tamanhos de 200px a 10px (para `i` de 1 a 20), criando um efeito visual em que as ondas ficam progressivamente menores.

<p>Então se quisermos aumentar o tamanho total das ondas para ocupar todo um frame e ter as ondas progressivas menores, basta ajustarmos os valores de forma proporcional. </p>


    Meu frame possui 400px, logo a formula do meu $size seria:

    $size: (400- (20 * $i)) - As ondas vão diminuir de tamanhos progressivamente de 400px a 20px, ocupando todo o frame incial e mantendo um efeito de ondas progressivamente menores. 
