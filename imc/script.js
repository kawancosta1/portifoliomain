let calcular = document.getElementById("calcular");
let recarregar = document.getElementById("confirma");
let btnR = document.getElementById("resultadoBtn")
calcular.addEventListener("click", imc);
function imc() {
  function criap(msg){
    let resultErro = document.querySelector(".resultErro");
    const p = document.createElement('p')
    p.classList.add('p-off')
    p.innerHTML += msg
    resultErro.appendChild(p)
  }
  let result = document.querySelector(".result");
  let inome = document.getElementById("Inome").value;
  let ipeso = Number(document.getElementById("Ipeso").value);
  let ialtura = Number(document.getElementById("Ialtura").value);

  if(ipeso == 0 && inome == '' && ialtura == 0){
    return criap('preencha os campos');
  }
if(ipeso == 0){
  return criap('O campo peso esta vazio');
}else if(inome == ''){
  return criap('O campo nome está vazio')
}else if(ialtura == 0){
return criap('O campo altura está vazio')
}
  
let classifica = ['você está abaixo do peso','você está no peso ideal','você está acima do peso','você está obeso','obesidade morbita' ];

    // tofixade = arredondar 1 casas
    var alt = ialtura * ialtura;
    var imc = (ipeso / alt).toFixed(2);
    if (imc < 18.5) {
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica[0]}`;
    } else if (imc > 18.5 && imc < 24.9) {
 
      result.innerHTML = `Resultado:  ${inome} seu imc é ${imc} ${classifica[1]}`;

    } else if (imc > 25 && imc < 29) {
      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica[2]}`;
    } else if (imc > 30 && imc < 34.9) {

      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica[3]}`;
    } else if (imc > 35) {

      result.innerHTML = `Resultado: ${inome} seu imc é ${imc} ${classifica[4]}`;
    }else{
      result.innerHTML = 'coma por favor'
    }
   
  
  }
  

  
  
  btnR.addEventListener("click", apare)
  function apare(){

 result = document.querySelector('.result')
  result.classList.toggle('reAparece')
  document.querySelector('.p-off').remove()
  
}

recarregar.addEventListener('click', recarregaP)

function recarregaP(){
  let result = document.querySelector(".result").innerHTML = '';
  let inome = document.getElementById("Inome").value = '';
  let ipeso = Number(document.getElementById("Ipeso").value = '');
  let ialtura = Number(document.getElementById("Ialtura").value = '');
  console.log('oa')
  document.location.reload(true);
}

  
  

  

 
