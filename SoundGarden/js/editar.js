const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.querySelector('#nome')
const inputPoster = document.querySelector('#banner')
const inputAtracoes = document.querySelector('#atracoes')
const inputDescricao = document.querySelector('#descricao')
const inputData = document.querySelector('#data')
const inputLotacao = document.querySelector('#lotacao')
const inputForm =  document.querySelector('form')

const id = new URLSearchParams (window.location.search).get('id')

async function getEventos (){
  const response = await fetch (`${URL}/${id}`) 
  const data = await response.json()  

  
  inputNome.value = data.name
  inputPoster.value = data.poster
  inputAtracoes.value = data.attractions
  inputDescricao.value = data.description
  inputLotacao.value = data.number_tickets
  inputData.value = data.scheduled   
}
getEventos()

inputForm.addEventListener('submit', async (event)=>{
    event.preventDefault()

    const showAtt = {
        name: inputNome.value,
        poster: inputPoster.value,
        attractions: [inputAtracoes.value],
        description: inputDescricao.value,
        scheduled:inputData.value,
        number_tickets: inputLotacao.value
    }
  
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(showAtt)    
    }

    const res = await fetch (`${URL}/${id}`,options)
    const resData = await res.json() 
    window.location.href='admin.html'

    if (res.status == 200){
       alert ('Evento editado com sucesso.')
    }

}
)