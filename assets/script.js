const inputTarefa = document.getElementById('input-tarefa')
const inputData = document.getElementById('input-data')
const bodyTable = document.getElementById('body-table')
const pMensagemErroTarefa = document.getElementById('p-mensagem-erro-tarefa')
const pMensagemErroData = document.getElementById('p-mensagen-erro-data')

let arrayTarefas = []
let contador = 0
const getLivros = () => {
  arrayTarefas = JSON.parse(localStorage.getItem('livros')) || []
}

console.log(arrayTarefas)
const setLivros = () => {
  localStorage.setItem('livros', JSON.stringify(arrayTarefas))
}

const adiconarTarefa = (tarefa, data) => {
  setTimeout(() => {
    inputTarefa.className = 'input'
    inputData.className = 'input'
  }, 800);
  if (tarefa && data) {

    //insere no localStorage
    arrayTarefas.push({
      tarefa: tarefa,
      data: data
    })
    setLivros()


    //renderiza a nova tareda
    const tdTarefa = document.createElement('td')
    const tdData = document.createElement('td')
    const trash = document.createElement('img')
    const edit = document.createElement('img')

    tdTarefa.innerText = tarefa
    tdData.innerText = data
    tdTarefa.id = `tarefa${contador}`
    tdData.id = `data${contador}`

    trash.src = 'imgs/trash.svg'
    trash.id = contador
    trash.className = 'trash'

    trash.addEventListener('click', () => {
      excluir(trash.id)
    })

    edit.src = 'imgs/edit.svg'
    edit.className = 'trash edit'
    edit.id = `edit${contador}`
    edit.addEventListener('click', editar(tdTarefa.id, tdData.id))
    tdTarefa.className = 'dados-livro'
    tdData.className = 'dados-livro'

    const linhaDeCadaTarefa = document.createElement('tr')
    linhaDeCadaTarefa.className = 'linha-de-cada-tarefa'
    linhaDeCadaTarefa.appendChild(tdTarefa)
    linhaDeCadaTarefa.appendChild(tdData)
    tdData.appendChild(trash)
    tdData.appendChild(edit)

    bodyTable.insertAdjacentElement("afterbegin", linhaDeCadaTarefa);
    exibirMensagem()
    contadorTarefas()
    contador++
  } else {
    if (!tarefa) {
      pMensagemErroTarefa.style.color = '#ffa600'
      inputTarefa.className = 'input input-tremer'
    }
    if (!data) {
      pMensagemErroData.style.color = '#ffa600'
      inputData.className = 'input input-tremer'
    }
  }
}

const renderizarTarefasDoLocalStorage = () => {
  if (contador == 0) {
    getLivros()
  }
  contador = 0
  bodyTable.innerText = ''
  arrayTarefas.map(elemento => {
    const tdTarefa = document.createElement('td')
    const tdData = document.createElement('td')
    const trash = document.createElement('img')
    const edit = document.createElement('img')

    tdTarefa.innerText = elemento.tarefa
    tdData.innerText = elemento.data
    tdTarefa.id = `tarefa${contador}`
    tdData.id = `data${contador}`

    // lixeira
    trash.src = 'imgs/trash.svg'
    trash.className = 'trash'
    trash.id = contador
    trash.addEventListener('click', () => {
      excluir(trash.id)
    })

    // editar
    edit.src = 'imgs/edit.svg'
    edit.className = 'trash edit'
    edit.id = `edit${contador}`
    edit.addEventListener('click', editar(tdTarefa.id, tdData.id))



    tdTarefa.className = 'dados-livro'
    tdData.className = 'dados-livro'

    const linhaDeCadaTarefa = document.createElement('tr')
    linhaDeCadaTarefa.className = 'linha-de-cada-tarefa'
    tdTarefa.addEventListener('dblclick', editar(tdTarefa.id, tdTarefa, tdData))
    linhaDeCadaTarefa.appendChild(tdTarefa)
    linhaDeCadaTarefa.appendChild(tdData)
    tdData.appendChild(trash)
    tdData.appendChild(edit)

    bodyTable.insertAdjacentElement("afterbegin", linhaDeCadaTarefa);
    contadorTarefas()
    contador++
  })
}

inputTarefa.addEventListener('input', () => {
  pMensagemErroTarefa.style.color = 'transparent'
})
inputData.addEventListener('input', () => {
  pMensagemErroData.style.color = 'transparent'
})

const exibirMensagem = () => {
  const pMensagen = document.getElementById('p-card-flutant')
  pMensagen.style.transform = 'scale(1)'
  pMensagen.style.top = '6px'
  setTimeout(() => {
    pMensagen.style.transform = 'scale(0)'
    setTimeout(() => {
      pMensagen.style.top = '-100px'
    }, 500)
  }, 2500);
}

const contadorTarefas = () => {
  const pQauntidadeTarefas = document.getElementById('p-quantidade-tarefa')
  pQauntidadeTarefas.innerText = arrayTarefas.length
}


const excluir = (id) => {
  arrayTarefas.splice(id, 1)
  document.getElementById(`tarefa${id}`).className = 'dados-livro sumir'
  document.getElementById(`data${id}`).className = 'dados-livro sumir'
  setTimeout(() => {
    renderizarTarefasDoLocalStorage()
    setLivros()
  }, 1000);
}

const editar = (idTarefa, idData) => {
  return () => {
    setTimeout(() => {
      inputTarefa.className = 'input'
      inputData.className = 'input'
    }, 1000);
    console.log(idTarefa)
    const indexTarefa = idData.match(/\d+/)[0]; // Extrai o número da string
    const indexData = idTarefa.match(/\d+/)[0]; // Extrai o número da string

    const tdTarefa = document.getElementById(idTarefa)
    const tdData = document.getElementById(idData)

    inputTarefa.value = tdTarefa.textContent
    inputData.value = tdData.textContent
    inputTarefa.focus()
    inputTarefa.className = 'input input-tremer-roxo'
    inputData.className = 'input input-tremer-roxo'

    btnAdicionar.style.display = 'none'
    const btnSalvar = document.getElementById('btn-salvar')
    btnSalvar.style.display = 'block'
    btnCancelar.style.display = 'block'
    btnSalvar.onclick = (e) => {
      e.preventDefault()
      if (inputTarefa.value == '' || inputData.value == '') {
        if (!inputTarefa.value) {
          pMensagemErroTarefa.style.color = '#ffa600'
          inputTarefa.className = 'input input-tremer'
        }
        if (!inputData.value) {
          pMensagemErroData.style.color = '#ffa600'
          inputData.className = 'input input-tremer'
        }
      } else {
        arrayTarefas[indexTarefa].tarefa = inputTarefa.value
        arrayTarefas[indexData].data = inputData.value

        setLivros()
        renderizarTarefasDoLocalStorage()
        document.getElementById(idData).className = 'dados-livro dados-piscar'
        document.getElementById(idTarefa).className = 'dados-livro dados-piscar'
        btnSalvar.style.display = 'none'
        btnCancelar.style.display = 'none'
        btnAdicionar.style.display = 'block'
        inputTarefa.value = ''
        inputData.value = ''
      }
    }
  }
}

//conmando do botão adiconar
const btnAdicionar = document.getElementById('btn-adicionar')

btnAdicionar.addEventListener('click', (e) => {
  e.preventDefault()
  adiconarTarefa(inputTarefa.value, inputData.value)
})




const btnCancelar = document.getElementById('btn-cancelar')

renderizarTarefasDoLocalStorage()