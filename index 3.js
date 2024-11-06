class heroi
{
    constructor(nome, idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

        if (this.tipo == "mago")
            this.tipoAtaque = "magia";
        
        else if (this.tipo == "guerreiro")
            this.tipoAtaque = "espada";
        
        else if (tipo == "monge")
            this.tipoAtaque = "marciais";
        
        else if (tipo == "ninja")
            this.tipoAtaque = "shuriken";

        else this.tipoAtaque = "erro";
    }

    ataque()
    {
        if (this.tipoAtaque == "erro")
            console.log("Tipo desconhecido!")
        else console.log(`o ${this.tipo} atacou usando ${this.tipoAtaque}`);
    }
}

//Digite o nome
let nome = "Per";
//Digite a idade
var idade = 10;
//Digite o tipo (ex: guerreiro, mago, monge ou ninja )
var tipo = "mago";

main()
function main()
{
    var personagem = new heroi(nome, idade, tipo)
    personagem.ataque()
    
}