const numerador = parseFloat(prompt('Digite o numerador: '));
const denominador = parseFloat(prompt('Digite o denominador: '));

if (denominador === 0) {
    alert('Não é possível dividir por 0! Tente novamente...');
} else {
    const resultado = numerador / denominador;
    alert('${numerador} dividido por ${denominador} é igual a ${resultado}'.);
}