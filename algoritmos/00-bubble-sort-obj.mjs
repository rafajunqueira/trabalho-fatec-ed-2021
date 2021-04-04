import { gastos } from '../includes/cota-parlamentar-8.5-mil.mjs'

let totTrocas, pass, comps

function bubbleSort(vetor, fnComp) {
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0      // Iniciando uma nova passada
        pass++

        // Percurso do vetor, da primeira até a PENÚLTIMA posição
        for(let i = 0; i <= vetor.length - 2; i++) {
            //if(vetor[i] > vetor[i + 1]) {
            if(fnComp(vetor[i], vetor[i + 1])) {
                // Troca direta em JS via desestruturação de vetor
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocas++
            }
            comps++
        }
        totTrocas += trocas

    } while (trocas > 0)
}


//console.log('ANTES:', gastos)


// Ordenando por: partido ;  nome_parlamentar ; id_documento
console.time('Ordenando partido')
bubbleSort(gastos, (obj1, obj2) => obj1.partido > obj2.partido)
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando partido')
//console.log('Depois: ', gastos)
console.log({ totTrocas, pass, comps, memoria })   