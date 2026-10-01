//Modulo 1 exercicio 1 em TypeScript:

interface Curso{
	id: number,
    titulo: string,
    cargaHoraria: number,
    professor: string,
    disciplinas: Disciplina[]
}

interface Disciplina {
	nome: string,
    semestre: number
}

const obj3: Curso = {
	id: 2020,
    titulo: "Louco",
    cargaHoraria: 30,
    professor: "murk",
    disciplinas: [
    	{
        	nome: "Sociologia",
            semestre: 3
        }
    ]
}
console.log(obj3);