function adicionarTarefa(){
    let valorDoInput = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = '<span class="tarefa-texto">' + valorDoInput + '</span><span onclick="editarTarefa(this)">✏️</span><span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value= ''
}

function deletarTarefa(span){
    span.parentElement.remove()
}

function editarTarefa(span){
    let li = span.parentElement
    let textoSpan = li.querySelector('.tarefa-texto')
    let textoAtual = textoSpan.textContent
    textoSpan.innerHTML = '<input type="text" value="' + textoAtual + '" onblur="salvarTarefa(this)" onkeypress="if(event.key === \'Enter\') salvarTarefa(this)">'
    span.style.display = 'none'
    li.querySelector('span[onclick*="deletar"]').style.display = 'none'
}

function salvarTarefa(input){
    let li = input.parentElement.parentElement
    let textoSpan = li.querySelector('.tarefa-texto')
    textoSpan.textContent = input.value
    li.querySelector('span[onclick*="editar"]').style.display = 'inline'
    li.querySelector('span[onclick*="deletar"]').style.display = 'inline'
}