var calcular = document.getElementById("calcular");

calcular.addEventListener("click", imc);
function imc() {
  let result = document.querySelector(".result");
  let inome = document.getElementById("Inome").value;
  let ipeso = Number(document.getElementById("Ipeso").value);
  let ialtura = Number(document.getElementById("Ialtura").value);


  if (inome == "" || ipeso == "" || ialtura == "") {
  } else {
    // tofixade = arredondar 1 casas
    var alt = ialtura * ialtura;
    var imc = (ipeso / alt).toFixed(2);
    if (imc < 18.5) {
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica}`;
    } else if (imc > 18.5 && imc < 24.9) {
      var classifica = "você está no peso ideal ";
      result.innerHTML = `Resultado:  ${inome} seu imc é ${imc} ${classifica}`;
    } else if (imc > 25 && imc < 29) {
      classifica = "você está acima do peso";
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica}`;
    } else if (imc > 30 && imc < 34.9) {
      classifica = "você está obeso";
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica}`;
    } else if (imc > 35) {
      classifica = "obesidade morbita";
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica}`;
    }
  }
  

  }

  calcular.addEventListener("click", apare)
  function apare(){
    
  let resultA = document.querySelector('.result')
  resultA.classList.toggle('reAparece')
  
  
}
  
