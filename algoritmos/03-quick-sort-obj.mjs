import { candidatos } from './includes/candidatos-2018'

let trocas, comps, pass

function quickSort(vetor, ini = 0, fim = vetor.length - 1) {
    if (fim > ini) {
        pass++
        const pivot = fim
        let div = ini - 1

        for (let i = ini; i < fim; i++) {
            if (vetor[i] < vetor[pivot]) {
                comps++
                div++
                if (i !== div) {
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]]
                    trocas++
                }
            }
        }
        div++
        if (vetor[pivot] < vetor[div]) {
            [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]]
            trocas++
        }
        comps++

        //ordena a esquerda do pivot
        quickSort(vetor, ini, div - 1)
        //ordena a direita do pivot
        quickSort(vetor, div + 1, fim)
    }
}

trocas = 0, comps = 0, pass = 0
// let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
// quickSort(nums)
// console.log(nums)
// console.log({ trocas, comps, pass })

console.time('Ordenando candidatos...')
quickSort(candidatos, (a, b) => {
    if (a.SG_UE === b.SG_UE) { // Empate na UF
        // Empte no cargo, desempate no número do candidato
        if (a.DS_CARGO === b.CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        // UF igual, cargos diferentes, diferencia por cargo
        else return a.DS_CARGO > b.DS_CARGO
    }
    else return a.SG_UE > b.SG_UE // UFs diferentes, diferencia por UF
})

let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('Depois: ', candidatos)
console.log({ trocas, pass, comps, memoria })   