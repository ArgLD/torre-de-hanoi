let mao = ""
let pinoAtual = ""
let body = document.querySelector("body")

const containerPinos = document.createElement('div')
containerPinos.classList.add('container-pinos')
body.appendChild(containerPinos)

const ultimoDisco = (event) => {
    event.stopPropagation()
    let elementoPai = event.currentTarget.parentElement
    if (event.currentTarget === elementoPai.lastElementChild && event.currentTarget !== null) {
        mao = event.currentTarget
        mao.classList.add('discoNaMao')
    }
}

//torre destino /verificar se a torre de destino tem um filho / se tiver fazer a comparação ou só colocar a peça
const soltaDisco = (event) => {
    event.stopPropagation()
    let pino3 = document.querySelector(".pino3")
    let discoFilhoAtual = event.currentTarget.lastElementChild || false // se a primeira não existir(não tiver filhos)pino vazio, vai colocar false
    console.log(typeof discoFilhoAtual)
    console.log(discoFilhoAtual)

    if (discoFilhoAtual !== false) { // pino ocupado / compara tamanho        
        if (mao.clientWidth < discoFilhoAtual.clientWidth) { //verificou se esta vazio
            event.currentTarget.appendChild(mao)
            mao.classList.remove('discoNaMao')
            mao = ""
        } else {
            alert('jogada inválida!')
        }
    }

    else { // pino vazio
        console.log("entrou no else")
        event.currentTarget.appendChild(mao)
        mao.classList.remove('discoNaMao')
        mao = ""
    }

    // vitória =  se todos os discos estão dentro do pino 3, disco1 && disco2 && disco3 && disco4   
    if (pino3.childElementCount === 4) {
        setTimeout(() => {
            alert('Venceu, boa!');
        }, 500)
    }
}

//DOM pra criar os containers (pinos)
for (let i = 1; i <= 3; i++) {
    let pino = document.createElement("div")
    pino.addEventListener("click", soltaDisco)
    pino.classList = `pino${i}`
    containerPinos.appendChild(pino)
}

//DOM pra criar os discos
for (let i = 1; i <= 4; i++) {
    let disco = document.createElement("div")
    disco.addEventListener("click", ultimoDisco)
    disco.classList = `disco${i}`
    let pino1 = document.querySelector(".pino1")
    pino1.appendChild(disco)
}