// ATENÇÃO:
// Agora entraremos na parte dificil do TS (que não é tão dificil assim)

// Types:
// são propriedades em que você pode mapear e padronizar um objeto para que ele siga uma estrutura de tipagem desejada por você.
// Isso vale somente para OBJETOS/DICIONARIOS DO JS.
type Struct = {
  name: string;
  years: number;
};

type User = {
  name: string;
  age: number;
  email: string;
  password?: string; // ao colocar "?" você impõe que o item é opcional dentro do objeto declarado com esse Type/Interface aqui, mas atenção pois ao fazer isso você está pondo undefined no item caso ele nn venha a ser utilizado, podendo causar futuros erros
  docs: Struct[];
  register(x: string): string;
  onClick?: () => void;
};

// agora você irá construir um OBJETO que siga a tipagem estruturada que você criou:

const professor: User = {
  name: "João Miguel",
  age: 20,
  email: "jmiguelarlopes@gmail.com",
  // password nn irei colocar por ser opcional, ficando então com tipo "undefined" ao ser chamado.
  // obs: caso queira chamar um item que é opcional, ele vai vim com a tipagem que você deu + 'undefined'
  // então caso queira retirar esse 'undefined' pela certeza que ele foi definido, coloque "!" que irá permanecer apenas a tipagem estipulada.
  docs: [
    { name: "vitor", years: 23 },
    { name: "rafael", years: 34 },
  ],
  register() {
    return "a";
  },
};

// Unions: funciona como herança multipla
type Author = {
  books: string[];
};

const author: Author & User = {
  name: "João Miguel",
  age: 20,
  email: "jmiguelarlopes@gmail.com",
  docs: [
    { name: "vitor", years: 23 },
    { name: "rafael", years: 34 },
  ],
  books: ["infinito", "mugen", "blue", "red"],
  register() {
    return "joão";
  },
};

// Interface: basicamente a mesma coisa, a diferença é que você pode inserir mais funcionalidades nos itens do objeto (ex: readonly)
// com interfaces/types também podemos incluir funções:

interface MathFunc {
  (x: number, y: number): number; // está dizendo que  a função que tiver essa interface, deve receber dois parametros (x, y) do tipo "number" e retornar um "number"
} // interface utilizada no arquivo "functions.ts"

// OBS Final:
// INTERFACES para funções projetam funções anônimas tipagens e nomeando os parâmetros e tipando o retorno
// INTERFACES em objetos deve nomear, dizer os parametros e o que retorna. Quando for chamada, apenas abra chaves e faça oq a função deve fazer
// pronto
