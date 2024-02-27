function verificarFibonacci(numero) {
    let fiboAtual = 0;
    let fiboProximo = 1;

    while (fiboAtual <= numero) {
        if (fiboAtual === numero) {
            return true;
        }
        let temp = fiboProximo;
        fiboProximo = fiboAtual + fiboProximo;
        fiboAtual = temp;
    }

    return false;
}


let numeroVerificar = 21; 

if (verificarFibonacci(numeroVerificar)) {
    console.log(numeroVerificar + " pertence à sequência de Fibonacci.");
} else {
    console.log(numeroVerificar + " não pertence à sequência de Fibonacci.");
}