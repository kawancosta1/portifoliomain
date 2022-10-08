
var calcular = document.getElementById("calcular");

calcular.addEventListener("click", imc)
function imc(){
    var result = document.getElementById("result")
    var inome = document.getElementById("Inome").value;
var ipeso = document.getElementById("Ipeso").value;
var ialtura = document.getElementById("Ialtura").value;


if(inome == "" || ipeso == ""||ialtura == ""){
   
}else{

    // tofixade = arredondar 1 casas
    var alt = ialtura * ialtura
    var imc = ( ipeso / alt).toFixed(1)
    if(imc < 18.5){
        result.textContent = `${inome} seu imc é ${imc} ${classifica}`;
        
    }else if(imc > 18.5 && imc< 24.9){
        var classifica = "você está no peso ideal "
        result.textContent = `${inome} seu imc é ${imc} ${classifica}`;
    }else if(imc > 25 && imc < 29){
        classifica = "você está acima do peso"
        result.textContent = `${inome} seu imc é ${imc} ${classifica}`;
    }else if(imc > 30 && imc < 34.9){
        classifica = "você está obeso"
        result.textContent = `${inome} seu imc é ${imc} ${classifica}`;
    }else if(imc > 35 ){
        classifica = "obesidade morbita"
result.textContent = `${inome} seu imc é ${imc} ${classifica}`;
    }
   
    


}

}
