
# Twisted Pyramid

    Praticando e aprendendo técnicas com o SCSS e CSS.

    A Tarefa da vez consiste em criar um Twisted utilizando Sass e CSS sem uso de lib para componentes.

    Nesse exemplo consegui executar utilizando as duas ferramentas, css puro e loop no sass a seguir vou deixar anotado os pontos fortes que encontrei em cada uma. 

[Solucionando com Sass/Scss](#scss)<br>
[Solucionado com CSS puro](#css)

<div>
    <p>Alinhamento padrão: </p>
    <code>
        top:50%; // Centralizando o elemento verticalmente.
        left: 50%; // Centralizando o elemento horizontalmente.
        width: 400px;
        height: 400px;
        margin-top: -200px; // Movendo para cima metade da altura para centralizar.
        margin-left: -200px; // Movendo para a esquerda metade da largura para centralizar.
    </code>
    <p>Alterado apenas para melhor exibição dos dois elementos.</p>
</div>

#### SCSS
* Loop For:<br>
     Seguindo a lógica de um loop padrão com a atenção no momento da expressão/cálculo de como as cores e tamanhos são calculados.

<code>

    $color:70 + ($i * 8); //Calculando a cor baseada no índice
    
    $size: (270 - (10 * $i)); // Calculando o tamanho baseado no índice.

</code>

    $color: 70 + ($i * 8) - Essa linha esta calculando a cor da borda de cada onda (class .wave) baseada no índice do loop.
<br>
Fórmula: 

 1. $i é o índice atual do loop criado `@for $i from 1 through 20` <br>(ao ler o código entederá o motivo da largura do loop ser até 20).
 
 2. Multiplicação ($i * 8): Multiplicando o índice por 8 consigo criar um incremento progressivo de cor.

    2.1 Adição (70 +): Adicionando 70 ao resultado da multiplicação.

Portanto, a cor de cada onda será: 
* Para `i = 1`: `70+ (1 * 8) = 78`
* Para `i = 2`: `70+ (2 * 8) = 86`
* Para `i = 3`: `70+ (3 * 8) = 94`
* E assim por diante...

Com isso tenho como resultado uma gama de cores de 78 a 230 (para `i` de 1 a 20); Ok meio complicado de entender só ela escrita mas ao visualizar isso em código vai ver que dessa forma cria um efeito visual em que as cores das bordas ficam progressivamente mais claras. 

    $size: (210 - (10 * $i)) - Essa linha esta calculando o tamanho de cada onda, também baseado no índice do loop. 

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
;

### CSS

Utilizando CSS padrão, a estrutura HTML segue o mesmo modelo entretanto para conseguir atingir o mesmo objetivo devemos desenvolver o Twisted Pyramid em cada div - (.waves)

obs: Para conseguir exibir os dois exemplos, editei o posicionamento do frame na tela, nada que altere o resultado apenas sua posição. 

* Definindo a estrutura default das waves.
    1. - Seguindo uma ordem da waves-1 à 20, vinculamos o z-index em sua respesctiva div/wave
        - waves-1: z-index-1;
        - waves-2: z-index-2; 
        - e assim por diante...

    2. - Defindo um padrão de Width e Heigh: 
        - Nesse exemplo o começo com o tamanho de ambos sendo 200px e sendo subtraído 10px a cada waves: 
            - w/h: 200px  (waves-1); w/h: 190px (waves-2); 
                w/h: 180px (waves-3); 
            Assim por diante e criando um padrão de tamanho. 

    3. - Definindo o padrão de Top e Left:
        - Seguindo a mesma lógica do 2.(W/H) começamos a definir um valor para o Top e Left de cada waves para a centralização, e a cada waves adicionamos 5px:
            - t/l: 100px (waves-1); t/l: 105px (waves-2);
            t/l: 115px (waves-3);

            Assim por diante e criando o padrão para que conforme adicionamos as waves, ela vai se afunilando ao fundo criando o efeito de profundidade. 

    4. - Escala de COR:
        - Para tudo fazer sentido, precisamos incluir uma gama de cores correspondentes e gerar o efeito de degradê. Nesse exemplo como temos 20 waves precisamos de uma cartela com 20tons conversantes. 
            - Começando do mais escuto pro mais claro, ou ao contrário.

            - Aqui essas questão é bem situacional, varia conforme o objetivo visual que deseja atingir. 

    5. - Principios da animação: 

        - Aqui configuramos como a nossa animação irá perfmorar, seguindo padrão de...
            - denifir o nome (rotate) - duração (2s) delay (0.5666666...s) nesse caso é cálculado baseado nos segundos de dalay e fracionado em três partes: 
                - Principal: 0.6s
                - Fração1: 0.6333333333s 
                - Fração2: 0.6666666667s
                - Cada Waves recebe seu prórpio delay/fração e não se repente.
            - Direção da sua animação (alternate) - Modo operante (infinite)
            
            - Claro que não regra e se aplica apenas para esse desafio entretanto a lógica se mantém para os outros, variando a sua construção.    
    
        animation: name duration timing-function delay iteration-count direction fill-mode;

    6. - Por fim, ajustando os keyframes e como eles irão atuar na sua animação: 

        <code>
            @keyframes rotate {
                from {
                    transform: rotate(0deg) translate3d(0,0,0);
                }
                to {
                    transform: rotate(360deg) translate3d(0,0,0);
                }
            }
        </code>

    - Sinceramente de toda a configuração essa é a parte mais tranquila e onde de fato vai fazer a sua animação funcionar.
---------------