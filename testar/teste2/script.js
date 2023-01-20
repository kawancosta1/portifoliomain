const list = document.querySelectorAll('.list');

function activeLink(){
    //resumidamente, ele desativa o que etsva ativado e ativa o que etsá sendo clicado
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    
}

list.forEach((item) =>
item.addEventListener('click', activeLink));