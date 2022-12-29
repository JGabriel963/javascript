const objs = [
    
    {
        nome: "Gabriel",
        idade: 20,
        cidade: "Teresina",
        esta_trablhando: true,
        detalhes_profissao: {
            "profissao": "Progamador",
            empresa: "Microsoft",
            Time: 1.5
        },
        hobbies: ["Play the guitar", "Linsten to classic music", "Travel"]
    },
    {
        nome: "Miguel",
        idade: 19,
        cidade: "Minas Gerais",
        esta_trablhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
            Time: null
        },
        hobbies: ["Play the guitar", "Linsten to classic music", "Travel"]
    },
]

console.log(objs[0].hobbies[1]);

// JSON

const jsonData = JSON.stringify(objs) // converter objeto para json
console.log(jsonData)
console.log(typeof jsonData) // Para o JS, JSON é um texto(string)

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData[0])

objData.map(pessoa => {
    console.log(pessoa.nome);
});