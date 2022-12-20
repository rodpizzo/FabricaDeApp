//selecionando input, ul e botao
let listElement = document.querySelector('#app2 ul')
let inputElement = document.querySelector('#app input')
let buttonElement = document.querySelector('#app button')

//criando lista de tarefas
let tarefas=[]

//criando função para pegar o input e escrever na ul (listElement)
function renderTarefas(){
    listElement.innerHTML=''
    //agora vou percorrer a lista tarefas e criar o li dentro da ul
    tarefas.map((tarefa)=>{// função anonima dentro da função map
        let liElement = document.createElement("li")
        let tarefaText = document.createTextNode(tarefa)//pegar o elemento que esta passando na posição da lista e criar um elemento de texto com ele

        //criando ancora para poder exluir o item
        let linkElement = document.createElement("a")
        linkElement.setAttribute("href", "#")
        let linkText = document.createTextNode("    excluir")
        linkElement.appendChild(linkText)

        //pegar o indice da lista
        let posicao = tarefas.indexOf(tarefa)

        //clicar em excluir chamar função
        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`)

        // adionar dentro da ul o li criado
        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)
    })
}

//criando função para adiconar tarefa
function adicionarTarefa(){
    if(inputElement.value === ''){
        alert('digite alguma tarefa')
        return false
    }
    else{
        let novaTarefa = inputElement.value
        tarefas.push(novaTarefa)
        inputElement.value=''
        renderTarefas()
    }
}

buttonElement.onclick = adicionarTarefa

function deletarTarefa(posicao){
    tarefas.splice(posicao,1)//só o primeiro item que ele encontrar
    renderTarefas()
}