const URL = 'https://xp41-soundgarden-api.herokuapp.com/events'

async function listarEventos (){
    const response = await fetch(URL)
        const data = await response.json()


    const tabela = document.querySelector('tbody')
    data.forEach((evento) =>{
        tabela.innerHTML += 
       `<th> ${data.indexOf(evento)+1} </th>
        <th> ${evento.scheduled} </th>
        <th> ${evento.name} </th>
        <th> ${evento.attractions} </th>
        <td>
        <a href="reservas.html?id=${evento._id}"class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${evento._id}"class="btn btn-secondary">editar</a>
        <a href="excluir-evento.html?id=${evento._id}"class="btn btn-danger">excluir</a>
        </td>
        `
        
    } ) 



}


listarEventos()
