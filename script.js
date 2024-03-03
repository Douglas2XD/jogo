
//a brincadeira vai do 1 ao 71
//no caso, indice 0-70

var numeros_gerados = []
function gerarNumero(){
    var numero;
    do{
        numero = Math.floor(Math.random()*71)+1;
    }while(numeros_gerados.includes(numero))
    numeros_gerados.push(numero);
    document.getElementById('resultado').innerText =numero;

}



function reiniciar(){
    location.reload()
}