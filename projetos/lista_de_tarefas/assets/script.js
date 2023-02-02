const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const Tarefas = document.querySelector('.tarefas')
//para ficar mais organizado devemos criar uma função cria li
function criaLi() {
    const li = document.createElement('li')
    return li;
}
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa) return;
        criaTarefa(inputTarefa.value)
        limpaInput()
    }
    //o espaçinho para dar entre o li e o botao
    function Apagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    //o atribute serbe para add title,href entre outros atributos
    botaoApagar.setAttribute('class', 'apagar')
    //para sempre ir no li
    li.appendChild(botaoApagar)
    }
    function criaTarefa(textoInput) {
        const li = criaLi();
        li.innerText = textoInput;
        Tarefas.appendChild(li);
        Apagar(li)
        salvarTarefas()
    
    }

});
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvarTarefas(){
const liTarefas = Tarefas.querySelectorAll('li')
const listaDeTarefas = []

for(let tarefa of liTarefas){
    //o trim remove espaços em branco
    const tarefaTexto = tarefa.innerText.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto)
}
//utilizamos o json para salvar os itens, tipo uma mini base de dados
const tarefasJSON = JSON.stringify(listaDeTarefas);
localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    //JSON stringfy é de javascript para stirng e parse é ao contrário
    const listaDeTarefas = JSON.parse(tarefas)
    for(let tarefa of listaDeTarefas){
      function criaTarefa(textoInput){
        const li = document.createElement('li')
        li.innerText = textoInput;
        Tarefas.appendChild(li);
        li.innerText += ' ';
        const botaoApagar = document.createElement('button')
        botaoApagar.innerText = 'Apagar'
        //o atribute serbe para add title,href entre outros atributos
        botaoApagar.setAttribute('class', 'apagar')
        //para sempre ir no li
        li.appendChild(botaoApagar)
        salvarTarefas()
      }
      criaTarefa(tarefa)
    }
    
}
adicionaTarefasSalvas()

btnTarefa.addEventListener('click', function() {
    //se não tiver nada ele não calcula e encerra a função
    if (!inputTarefa) return;
    criaTarefa(inputTarefa.value)
    limpaInput()

})



document.addEventListener('click',function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas()
    }
})

