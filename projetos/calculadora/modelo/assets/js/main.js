function criaCalculadora(){
    //pode ter outras funções fora do objeto ou var sla
    return{
        //acessar com this.display
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia(){
            this.clickBotoes();
            this.pressionaEnter()
        },

        pressionaEnter(){
            //usei a arrow function para não perder o this 
            
            this.display.addEventListener("keyup", e => {
                if(e.keycode === 13){
                    this.realizaConta()
                }
            })
        }

        realizaConta(){
        let conta = this.display.value;

        this.display.value;
        try{
            conta = eval(conta);
            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value = String(conta)
        }catch(e){
alert('conta invalida')
return;
        }
        },
    clearDisplay(){
        this.display.value = ''
    },

    apagaUm(){

        //no slice é o tamanho da string -1
        this.display.value = this.display.value.slice(0, -1)

    },
    



      //metodos vem para baixo  
    btnParaDisplay(valor){
this.display.value += valor
    },
    clickBotoes(){
        //no clickBotoes é a calculadora que é o this mas no addEventListner não é a calculadora, e devemos apontar o this para a calculadaora não o document, onde o addEvent pertence
      document.addEventListener('click',function(e){

    const el = e.target
console.log(this)
    if(el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText);
    if(el.classList.contains('btn-clear'))this.clearDisplay();
    if(el.classList.contains('btn-del'))this.apagaUm();
    if(el.classList.contains('btn-eq')) this.realizaConta();
        //parametro para pegar o conteudo do botao
        
    
        
      }.bind(this)) ; 
    }
    }
};

const calculadora = criaCalculadora();

calculadora.inicia()
