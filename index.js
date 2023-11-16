function calcularIMC() {
    for (let i = 0; i < 10; i++) {
      let nome = prompt("Digite o nome do usuário " + (i + 1) + ":");
      let peso = parseFloat(prompt("Digite o peso (em kg) de " + nome + ":"));
      let altura = parseFloat(prompt("Digite a altura (em metros) de " + nome + ":"));
  
      let imc = peso / (altura * altura);
      let classificacao = '';
  
      if (imc < 18.5) {
        classificacao = 'Abaixo do peso normal';
      } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
      } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Excesso de peso';
      } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade classe 1';
      } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade classe 2';
      } else (imc >= 40 &&
        classificacao = 'Obesidade classe 3';
      }
  
      console.log(`Nome: ${nome}, IMC: ${imc.toFixed(2)}, Classificação: ${classificacao}`);
    }
  }
  
  calcularIMC();