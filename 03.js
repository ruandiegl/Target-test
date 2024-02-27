const faturamentoMensal = {
    "Janeiro": [1000, 1500, 2000, 0, 1800, 0, 2200, 2500, 2300, 0, 1900, 2100, 1700, 0, 2400, 2600, 2800, 2100, 2000, 0, 2300, 2200, 2400, 2500, 2600, 2000, 0, 0, 0, 0],
    
};

function calcularEstatisticasFaturamento(mes) {
    const valoresFaturamento = faturamentoMensal[mes];
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamentoAcimaDaMedia = 0;

    
    for (let valor of valoresFaturamento) {
        if (valor > 0) {
            if (valor < menorValor) {
                menorValor = valor;
            }
            if (valor > maiorValor) {
                maiorValor = valor;
            }
            totalFaturamento += valor;
        }
    }

    
    const diasComFaturamento = valoresFaturamento.filter(valor => valor > 0).length;
    const mediaMensal = totalFaturamento / diasComFaturamento;

   
    for (let valor of valoresFaturamento) {
        if (valor > mediaMensal) {
            diasComFaturamentoAcimaDaMedia++;
        }
    }

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasAcimaMedia: diasComFaturamentoAcimaDaMedia
    };
}


const estatisticasJaneiro = calcularEstatisticasFaturamento("Janeiro");
console.log("Menor valor de faturamento: ", estatisticasJaneiro.menorValor);
console.log("Maior valor de faturamento: ", estatisticasJaneiro.maiorValor);
console.log("Número de dias com faturamento acima da média: ", estatisticasJaneiro.diasAcimaMedia);
