# RESUMO DA INTERFACE/TYPE

<div>
<p>Interface Mapeia objetos, mapeando cada item. Ela nomeia a <code>KEY</code> e tipa o que o <code>VALUE</code> deve ter</p>

<p>Interface também pode Padronizar uma função para que ela receba os parâmetros e tipagem de retorno que deve receber</p>

<p>E por último e MAIS IMPORTANTE, Interface pode mapear classes! Desde suas variáveis (atributos), as funções (métodos) que elas devem receber, tipando também os retornos</p>
</div>

<div>
    <h2>Modificadores importantes dentro das classes:</h2>
    <p>Readonly: Variáveis que não podem ser alteradas, apenas visualizadas. única excessão ao Constructor.</p>
    <p>Proctected: Faz com que a variável seja acessada somente pela classe e seus filhos (subclasses)</p>
    <p>Private: Essa variável só consegue ser acessada dentro da propria classe (nem mesmo suas filhas podem acessa-lás)</p>  
</div>

<div>
    <h2>Generics</h2>
    <h5>Basicamente variáveis de tipo</h5> 
    <p>
        Com elas você pode, basicamente, setar uma variável sob <code><></code> e com isso ditar os tipos que existe na
        função, classe, enum ou interface que quiser para assim aproveitar uma mesma estrutura porém com a versatilidade para inserir em diferentes contextos
        sem deixar o controle e a segurança do código de lado por meio do sistema de tipagem estática do TS
    </p>
    <p>
        Para especificar a tipagem que foi padronizada porém ainda não definida, basta chamar a função que foi implementa o "Generics", abrir <> e dentro dela inserir o Tipo que você queira. A partir dali ele vai inserir o tipo que você estabeleceu no lugar da variável de quando a função/classe/interface foi definida
    </p>
    <pre>
    const returnNumber = <Type>(vars: Type): Type => {
        return vars;
    };

    const returnedNumber = returnNumber<number>(20);</code>
    // veja o código MarkDown, não por essa tela

</pre>

</div>
