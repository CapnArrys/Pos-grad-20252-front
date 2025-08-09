const calcular = () => {
      const n1 = parseFloat(document.getElementById('num1').value);
      const n2 = parseFloat(document.getElementById('num2').value);
      const operador = document.getElementById('operador').value;
      let resultado;

      if (isNaN(n1) || isNaN(n2)) {
        resultado = "Digite dois números válidos.";
      } else {
        switch (operador) {
          case '+':
            resultado = n1 + n2;
            break;
          case '-':
            resultado = n1 - n2;
            break;
          case '*':
            resultado = n1 * n2;
            break;
          case '/':
            if (n2 === 0) {
              resultado = "Divisão por zero não é permitida.";
            } else {
              resultado = n1 / n2;
            }
            break;
          default:
            resultado = "Operador inválido.";
        }
      }

      document.getElementById('resultado').textContent = resultado;
    }