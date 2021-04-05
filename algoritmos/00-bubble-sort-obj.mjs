import { gastos1 } from '../includes/cota-parlamentar-8.5-mil.mjs'
import { gastos2 } from '../includes/cota-parlamentar-35-mil.mjs'
import { gastos3 } from '../includes/cota-parlamentar-140-mil.mjs'
import { gastos4 } from '../includes/cota-parlamentar-282-mil.mjs'

function bubbleSort(vetor, fnComp) {
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        for (let i = 0; i <= vetor.length - 2; i++) {
            if (fnComp(vetor[i], vetor[i + 1])) {
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
            }
        }
    } while (trocas > 0)
}

// Ordenando por: partido ;  nome_parlamentar ; id_documento
console.log('8.5 MIL: ')
console.time('Ordenado Em: ')
bubbleSort(gastos1,
    (a, b) => {
        if (a.partido === b.partido) { // Empate no partido
            // Empate no nome_parlamentar, desempate no número do candidato
            if (a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
            // partido igual, nome_parlamentar diferentes, diferencia por nome_parlamentar
            else return a.nome_parlamentar > b.nome_parlamentar
        }
        else return a.partido > b.partido // partidos diferentes, diferencia por partido
    })

//bubbleSort(gastos, (obj1, obj2) => obj1.partido > obj2.partido)
let memoria1 = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenado Em: ')
// console.log('Depois: ', gastos)
console.log('Memória: ', memoria1)

/*                                                                */
console.log('35 MIL: ')

console.time('Ordenado Em: ')
bubbleSort(gastos2,
    (a, b) => {
        if (a.partido === b.partido) { // Empate no partido
            // Empate no nome_parlamentar, desempate no número do candidato
            if (a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
            // partido igual, nome_parlamentar diferentes, diferencia por nome_parlamentar
            else return a.nome_parlamentar > b.nome_parlamentar
        }
        else return a.partido > b.partido // partidos diferentes, diferencia por partido
    })

//bubbleSort(gastos, (obj1, obj2) => obj1.partido > obj2.partido)
let memoria2 = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenado Em: ')
// console.log('Depois: ', gastos)
console.log('Memória: ', memoria2)

/*                                                                */
console.log('140 MIL: ')

console.time('Ordenado Em: ')
bubbleSort(gastos3,
    (a, b) => {
        if (a.partido === b.partido) { // Empate no partido
            // Empate no nome_parlamentar, desempate no número do candidato
            if (a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
            // partido igual, nome_parlamentar diferentes, diferencia por nome_parlamentar
            else return a.nome_parlamentar > b.nome_parlamentar
        }
        else return a.partido > b.partido // partidos diferentes, diferencia por partido
    })

//bubbleSort(gastos, (obj1, obj2) => obj1.partido > obj2.partido)
let memoria3 = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenado Em: ')
// console.log('Depois: ', gastos)
console.log('Memória: ', memoria3)

/*                                                                */
console.log('282 MIL: ')

console.time('Ordenado Em: ')
bubbleSort(gastos4,
    (a, b) => {
        if (a.partido === b.partido) { // Empate no partido
            // Empate no nome_parlamentar, desempate no número do candidato
            if (a.nome_parlamentar === b.nome_parlamentar) return a.id_documento > b.id_documento
            // partido igual, nome_parlamentar diferentes, diferencia por nome_parlamentar
            else return a.nome_parlamentar > b.nome_parlamentar
        }
        else return a.partido > b.partido // partidos diferentes, diferencia por partido
    })

//bubbleSort(gastos, (obj1, obj2) => obj1.partido > obj2.partido)
let memoria4 = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenado Em: ')
// console.log('Depois: ', gastos)
console.log('Memória: ', memoria4)