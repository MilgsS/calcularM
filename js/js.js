function calcularM(notas) {
    let soma = 0;
    for ( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }
    media = soma / notas.length;
    return media
}

function aprovacao(notas){
    let media = calcularM(notas)
        let  condiçao =  media >= 6? "Aprovado" : 'Reprovado'
    return 'Sua média foi: '+media+' e voce foi '+condiçao;
}

document.addEventListener('submit', function(evento){
    evento.preventDefault();
        let formulario = document.getElementById('form');
            let dados = new FormData(formulario);
            let objeto = {};
            let notas = [];
            for(let key of dados.keys()) {
        objeto[key] = dados.get(key);
        notas.push(parseInt(dados.get(key)))}
        texto = aprovacao(notas);
            document.getElementById('resultado').innerHTML = texto
});