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

inputForm.addEventListener('submit', async (event) =>{
  event.preventDefault()

  const options = {
    method:'DELETE',
    headers:{'content-type':'application/json'},
  }
 
  const res = await fetch (`${URL}/${id}`,options)
  window.location.href='admin.html'

  if (res.status != 0){
    alert ('Evento editado com sucesso.')
 }

  
}) 

