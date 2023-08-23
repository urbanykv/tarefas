// referencias para dark mode
const body = document.querySelector('body')
const botaoDark = document.querySelector('.darkMode');
const header = document.querySelector('header');
const main = document.querySelector('main');

// referencias para Lista de Tarefas
const inp = document.querySelector('input');
const button = document.getElementById('cadastrar');
let lista = document.querySelector('ul');
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

//Funcionamento de Lista.
function remover(tar){
    tarefas.splice(tarefas.indexOf(tar.textContent), 1)
    renderizarTar()
    salvarDadosNoStorage()
}

function renderizarTar(){

    lista.innerHTML = '';

    for(tar of tarefas){
         // criando LIs.
        let itemLista = document.createElement('li')

         // seta atributos pras LIs.
        itemLista.setAttribute('class', 'tarefas');

        itemLista.onclick = function(){
            remover(this)
        }

        //criei o texto.
        let itemTexto = document.createTextNode(tar);

        // texto é filho das LIs.
        itemLista.appendChild(itemTexto) 

        // LIs são filhas da UL.
        lista.appendChild(itemLista)
    }
    salvarDadosNoStorage()
}

renderizarTar()

button.onclick = function(){
    if(inp.value !== ''){
        const novaTarefa = inp.value;
        tarefas.push(novaTarefa);
        renderizarTar();
        inp.value = '';
    }else{
        textoAviso = document.createTextNode('Preencha o campo.');
        const divAviso = document.querySelector('.aviso');
        const aviso = document.createElement('span')
        aviso.setAttribute('class', 'alerta')
        aviso.appendChild(textoAviso);
        divAviso.appendChild(aviso)
        setTimeout(function(){divAviso.removeChild(aviso)}, 1000)
    }
    salvarDadosNoStorage()
}



//Adicionando Dark Mode.
botaoDark.addEventListener('click', function(){
    if(header.classList.contains('header')){
        body.classList.add('body-dark');
        header.classList.remove('header');
        header.classList.add('header-dark');
        main.classList.add('main-dark');
        inp.classList.remove('texto');
        inp.classList.add('texto-dark');
        button.classList.remove('cadastrar');
        button.classList.add('cadastrar-dark');
        sun.style.display = 'block'
        moon.style.display = 'none'
    }else{
        body.classList.remove('body-dark');
        header.classList.add('header');
        header.classList.remove('header-dark');
        main.classList.remove('main-dark');
        inp.classList.add('texto');
        inp.classList.remove('texto-dark');
        button.classList.add('cadastrar');
        button.classList.remove('cadastrar-dark');
        moon.style.display = 'block'
        sun.style.display = 'none'
    }
})




function salvarDadosNoStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}


console.log(JSON.stringify(tarefas));

console.log(tarefas.length);