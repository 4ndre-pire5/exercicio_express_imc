class IMCService {
    calculate(weight, height) {
      const imc = weight / height ** height;
      let description = "";
      if (imc <=18.5) description = "Magreza";
      else if (imc <= 24.9) description = "Normal";
      else if (imc <= 30) description = "Sobrepeso";
      else description = "Obesidade";
  
      return { imc: imc.toFixed(2), description: description };
    }
  }
  
  module.exports = IMCService;