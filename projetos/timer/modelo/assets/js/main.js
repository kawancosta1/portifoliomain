//new date() 
//zerar o timer e passar pra segundos, pois o date recebe em milésimo de segundos
function criaHoraDosSegundos(segundosFunction){
    const data = new Date(segundosFunction * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        //utc serve para zerar os 00:00:00
        timeZone:'UTC'
    });
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;

let timer;
function iniciaRelogio(){
    //vai somar ++ no segundos e passar os segundos pra função sem tempo predefinidpo
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
     })
}

try{

    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('iniciar')){
            //antes de iniciar devemos tirar todas as classes de cores
            relogio.classList.remove('pausado','zerar1');
            segundos = 0;
            relogio.innerHTML = '00:00:00'
            iniciaRelogio();
        }else if(el.classList.contains('pausar')){
            //antes de iniciar devemos tirar todas as classes de cores e pausar o timer com o clearinterval
            clearInterval(timer)
            relogio.classList.remove('zerar1');
            relogio.classList.add('pausado');
        }else if(el.classList.contains('zerar')){
            relogio.innerHTML = '00:00:00'
            segundos = 0;
            relogio.classList.add('zerar1');
        }
    })

    }catch(e){
    console.log('um erro inesperado aconteceu')
}

